
// Declare the collection
var Pledge = new Meteor.Collection("pledges");

// Publish the collection to the client
Meteor.publish("pledges", function() {
  return Pledge.find();
});

// Set permissions on this collection
Pledge.allow({
  
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
  if (Pledge.find().count() === 0) {
    
  }
});
