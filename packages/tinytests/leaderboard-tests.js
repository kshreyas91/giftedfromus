

Tinytest.add('Template.leaderboard.players()', function (test) {

  var someLocalCollectionCursor = {};
  Players.find = function (selector, options) {
      test.equal(options.sort.score, -1);
      test.equal(options.sort.name, 1);
      // expect(options.sort.score).toBe(-1);
      // expect(options.sort.name).toBe(1);
      return someLocalCollectionCursor;
  };

  test.equal(Template.leaderboard.players(), someLocalCollectionCursor);
  //expect(Template.leaderboard.players()).toBe(someLocalCollectionCursor);
});

Tinytest.add('mathworking()', function (test) {

/*  var someLocalCollectionCursor = {};
  Players.find = function (selector, options) {
      test.equal(options.sort.score, -1);
      test.equal(options.sort.name, 1);
      // expect(options.sort.score).toBe(-1);
      // expect(options.sort.name).toBe(1);
      return someLocalCollectionCursor;
  };
*/
  test.equal(2+2, 4);
  //expect(Template.leaderboard.players()).toBe(someLocalCollectionCursor);
});