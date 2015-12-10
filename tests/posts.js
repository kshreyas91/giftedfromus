var assert = require('assert');

suite('User Authorization', function() {
  ltest('access granted for loggedin users', function(done, server, client) {
    server.eval(function() {
      Accounts.createUser({email: 'a@a.com', password: '123456'});
      emit('done');
    }).once('done', function() {
      server.eval(observeCollection);
    });

    function observeCollection() {
      Surprises.find().observe({
        added: function(doc) {
          emit('added', doc);
        }
      });
    }

    server.once('added', function(doc) {
      assert.equal(doc.title, 'hello');
      done();
    });

    client.eval(function() {
      Meteor.loginWithPassword('a@a.com', '123456', function() {
        Surprises.insert({title: 'hello'});
      });
    });
  });

  ltest('access denied for normal users', function(done, server, client) {
    client.eval(function() {
      Surprises.find().observe({
        removed: function(doc) {
          emit('remove', doc);
        }
      });

      Surprises.insert({title: 'hello'});
    });

    client.once('remove', function(doc) {
      assert.equal(doc.title, 'hello');
      done();
    });
  });
});