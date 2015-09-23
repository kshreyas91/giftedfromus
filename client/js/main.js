/*
    The main entry point for the client side of the app
 */

// Create the main app object
this.App = {};

// Create the needed collections on the client side
this.Surprises = new Meteor.Collection("surprises");

// Subscribe to the publishes in server/collections

Meteor.subscribe('surprises');


// Start the app
Meteor.startup(function() {
  $(function() {
    App.routes = new Routes();
  });
});
