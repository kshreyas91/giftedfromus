
// Declare the collection
var GiftSuggestions = new Meteor.Collection("giftsuggestions");

// Publish the collection to the client
Meteor.publish("giftsuggestions", function() {
  return GiftSuggestions.find();
});

// Set permissions on this collection
GiftSuggestions.allow({
  
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
  if (GiftSuggestions.find().count() === 0) {
    
  }
});
