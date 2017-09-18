// $(document).ready(function() {
//     /* global moment */
  
//     // blogContainer holds all of our posts
//     var blogContainer = $(".blog-container");
//     var postCategorySelect = $("#category");
//     // Click events for the edit and delete buttons
//     // Variable to hold our posts
//     var posts;
  
//     // The code below handles the case where we want to get blog posts for a specific author
//     // Looks for a query param in the url for author_id
//     var url = window.location.search;
//     var ashevillesId;
//     if (url.indexOf("?ashevilles_id=") !== -1) {
//       authorId = url.split("=")[1];
//       console.log(ashevillesId);
//       getPosts(ashevillesId);
//     }
//     // If there's no authorId we just get all posts as usual
//     else {
//       getPosts();
//     }
  
  
//     // This function grabs posts from the database and updates the view
//     function getPosts(author) {
//       authorId = author || "";
//       if (authorId) {
//         authorId = "/?author_id=" + authorId;
//       }
//       $.get("/api/posts" + authorId, function(data) {
//         console.log("Posts", data);
//         posts = data;
//         if (!posts || !posts.length) {
//           displayEmpty(author);
//         }
//         else {
//           initializeRows();
//         }
//       });
//     }
  
//     // This function constructs a post's HTML
//     function createNewRow(post) {
//       var formattedDate = new Date(post.createdAt);
//       formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
//       var newPostPanel = $("<div>");
//       newPostPanel.addClass("panel panel-default");
//       var newPostPanelHeading = $("<div>");
//       newPostPanelHeading.addClass("panel-heading");
//       var deleteBtn = $("<button>");
//       deleteBtn.text("x");
//       deleteBtn.addClass("delete btn btn-danger");
//       var editBtn = $("<button>");
//       editBtn.text("EDIT");
//       editBtn.addClass("edit btn btn-info");
//       var newPostTitle = $("<h2>");
//       var newPostDate = $("<small>");
//       var newPostAuthor = $("<h5>");
//       newPostAuthor.text("Written by: " + post.Author.name);
//       newPostAuthor.css({
//         float: "right",
//         color: "blue",
//         "margin-top":
//         "-10px"
//       });
//       var newPostPanelBody = $("<div>");
//       newPostPanelBody.addClass("panel-body");
//       var newPostBody = $("<p>");
//       newPostTitle.text(post.title + " ");
//       newPostBody.text(post.body);
//       newPostDate.text(formattedDate);
//       newPostTitle.append(newPostDate);
//       newPostPanelHeading.append(deleteBtn);
//       newPostPanelHeading.append(editBtn);
//       newPostPanelHeading.append(newPostTitle);
//       newPostPanelHeading.append(newPostAuthor);
//       newPostPanelBody.append(newPostBody);
//       newPostPanel.append(newPostPanelHeading);
//       newPostPanel.append(newPostPanelBody);
//       newPostPanel.data("post", post);
//       return newPostPanel;
//     }
//     // This function displays a messgae when there are no posts
//     function displayEmpty(id) {
//       var query = window.location.search;
//       var partial = "";
//       if (id) {
//         partial = " for Author #" + id;
//       }
//       blogContainer.empty();
//       var messageh2 = $("<h2>");
//       messageh2.css({ "text-align": "center", "margin-top": "50px" });
//       messageh2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
//       "'>here</a> in order to get started.");
//       blogContainer.append(messageh2);
//     }
  
//   });
  