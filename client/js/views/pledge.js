Template.pledge.events({
    'submit form': function(event){
        event.preventDefault();
        var pledgeAmount = parseInt(event.target.pledgeAmount.value);
        var templateData = Session.get('templateData');
        var campaignId = templateData.id
        var suggestedBy = Meteor.userId();
        Pledge.insert({campaignId:campaignId,suggestedBy:suggestedBy,pledgeAmount:pledgeAmount});

        $("#pledgeMoney").hide();
        $(".modal-backdrop").hide();

    }
});