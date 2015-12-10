
var Surprises = new Meteor.Collection("surprises");

Tinytest.add('surprise-add-test', function (test){
  var id= Surprises.insert({title: "formCampaignTitle", name: "formGifteeName", description: "formCampaignDesc", date: "12/10/15", pledgeGoal: 300, endDate: "10/10/15", createdBy: "createdBy"});
  var surprise_test = Surprises.findOne({_id:id});
  test.equal(surprise_test.title, "formCampaignTitle");
  test.equal(surprise_test.name, "formGifteeName");
  test.equal(surprise_test.description, "formCampaignDesc");
  test.equal(surprise_test.date, "12/10/15");
  test.equal(surprise_test.pledgeGoal, 300);
  test.equal(surprise_test.endDate, "10/10/15");
  test.equal(surprise_test.createdBy, "createdBy");
});

var Pledge = new Meteor.Collection("pledges");

Tinytest.add('pledge-add-test', function (test){
  var id = Pledge.insert({campaignId:"campaignId",pledgedBy:"pledgedBy",name:"name",pledgeAmount:20});
  var pledge_test = Pledge.findOne({_id:id});
  test.equal(pledge_test.campaignId, "campaignId");
  test.equal(pledge_test.pledgedBy, "pledgedBy");
  test.equal(pledge_test.name, "name");
  test.equal(pledge_test.pledgeAmount, 20);
});

var GiftSuggestions = new Meteor.Collection("giftsuggestions");

Tinytest.add('giftsuggestions-add-test', function (test){
  var id = GiftSuggestions.insert({name: "name", price: 100, description: "desc", forCampaign: "campaignId", suggestedBy: "suggestedBy", upvotes: 0})
  var gift_test = GiftSuggestions.findOne({_id:id});
  test.equal(gift_test.name, "name");
  test.equal(gift_test.price, 100);
  test.equal(gift_test.description, "desc");
  test.equal(gift_test.forCampaign, "campaignId");
  test.equal(gift_test.suggestedBy, "suggestedBy");
  test.equal(gift_test.upvotes, 0);
});



