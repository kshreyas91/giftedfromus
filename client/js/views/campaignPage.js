Meteor.startup(function() {

  var getId = function() {
    var templateData;
    templateData = Session.get('templateData');
    if (templateData) {
      return templateData.id;
    } else {
      return '';
    }
  };

  var getCampaignId = function() {
  var templateData = Session.get('templateData');
  if(templateData)
    return templateData.id
  else
    return -1;
  };

  Template.campaignPage.helpers({
    publicURL: document.URL,

    data: function() {
      return Surprises.findOne({
        _id: getId()
      });
    },

    suggestions: function() {
      return GiftSuggestions.find({forCampaign:Session.get('templateData').id}, {sort :{upvotes:-1}});

    }
  });
  Template.campaignPage.events({
  'click .endroseGift' : function(event) {
    var suggestionId = event.target.id;
    var up= GiftSuggestions.findOne({_id:suggestionId}).upvotes
    GiftSuggestions.update({_id:suggestionId}, {$set: {upvotes:up+1}});
  
  }
  });
});
