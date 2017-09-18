var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var app = express();
var db = require("./models");

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static('public'));
// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    titleizeName: function(name) {
      function titleCase(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      }
      
    	var titles = ["mr", "dr", "ms", "mrs","miss"];
    	var names = name.split(" ");

    	for (var i = 0; i < names.length; i += 1) {
    	  name = names[i];

    	  names[i] = titleCase(name.toLowerCase());
    	}

    	var potentialTitle = names[0];
    	if (titles.includes(potentialTitle.toLowerCase())) {
    	  var length = potentialTitle.length;

    	  if (potentialTitle[length - 1] !== ".") {
    	    names[0] = potentialTitle + ".";
    	  }
    	}

    	return names.join(" ");
		}
  }
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/controller.js');
app.use('/', routes);


// // Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

var PORT = process.env.PORT || 8008;
db.sequelize.sync({
  force: true
}).then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT);
  });
});