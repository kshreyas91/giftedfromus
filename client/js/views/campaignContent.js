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

  Template.campaignContent.helpers({
    publicURL: document.URL,

    data: function() {
      return Surprises.findOne({
        _id: getId()
      });
    },

    suggestions: function() {
      return GiftSuggestions.find({forCampaign:Session.get('templateData').id}, {sort :{upvotes:-1}});
    },


    pledgedAmount: function(){
      pledgedTotal = 0;

      Pledge.find({campaignId:Session.get('templateData').id}).map(function(doc){
        pledgedTotal += doc.pledgeAmount;
      });

      return pledgedTotal;
    },

    pastPledges: function() {
      return Pledge.find({campaignId:Session.get('templateData').id});
    }

  });

Pledge.helpers({
  pledger: function(){
    return Meteor.users.findOne(this.pledgedBy);
  }
});

  Template.campaignContent.events({
  'click .endorseGift' : function(event) {
    var suggestionId = event.target.id;
    var up= GiftSuggestions.findOne({_id:suggestionId}).upvotes
    GiftSuggestions.update({_id:suggestionId}, {$set: {upvotes:up+1}});
  
  }
  });
});
