Template.pledge.events({
    'submit form': function(event){
        event.preventDefault();
        var pledgeAmount = parseInt(event.target.pledgeAmount.value);
        var templateData = Session.get('templateData');
        var campaignId = templateData.id
        var pledgedBy = Meteor.userId();
        var name = Meteor.user().profile.name;
        Pledge.insert({campaignId:campaignId,pledgedBy:pledgedBy,name:name,pledgeAmount:pledgeAmount});

        $("#pledgeMoney").hide();
        $(".modal-backdrop").hide();

    }
});