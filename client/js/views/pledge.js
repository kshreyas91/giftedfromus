Template.pledge.events({
    'submit form': function(event){
        event.preventDefault();
        var plegeAmount = event.target.pledgeAmount.value;
        var templateData = Session.get('templateData');
        var campaignId = templateData.id
        var suggestedBy = Meteor.userId();
        Pledge.insert({campaignId:campaignId,suggestedBy:suggestedBy,pledgeAmount:pledgeAmount});
    }
});