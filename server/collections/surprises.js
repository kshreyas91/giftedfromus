/*
    The cars collection
 */

// Declare the collection
var Surprises = new Meteor.Collection("surprises");

// Publish the collection to the client
Meteor.publish("surprises", function() {
  return Surprises.find();
});

// Set permissions on this collection
Surprises.allow({
  
insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc) {
    return true;
  }

});

// What to do when the server first starts up
Meteor.startup(function() {

  // Fill the collection with some initial data if it's empty
  if (Surprises.find().count() === 0) {
    
  }
});
