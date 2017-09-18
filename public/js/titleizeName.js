"use strict";

var titleizeName = function(name) {
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
};

function titleCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
