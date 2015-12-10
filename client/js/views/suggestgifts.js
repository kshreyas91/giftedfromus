Template.suggestgift.events({
    'submit form': function(event){
        event.preventDefault();
        var name = event.target.formSuggestName.value;
        var price = event.target.formSuggestPrice.value;
        var desc = event.target.formSuggestDesc.value;
        var templateData = Session.get('templateData');
        var campaignId = templateData.id
        var suggestedBy = Meteor.userId();
        var upvotes = 0;
        GiftSuggestions.insert({name: name, price:price, description:desc, forCampaign:campaignId, suggestedBy:suggestedBy, upvotes:upvotes})

        $("#suggestGift").hide();
        $(".modal-backdrop").hide();

    }
});