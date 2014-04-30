// in order to see the app running inside the QUnit runner
window.App.rootElement = '#ember-testing';

// Common test setup
window.App.setupForTesting();
window.App.injectTestHelpers();

// common QUnit module declaration
module("Integration tests", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(window.App, window.App.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
      window.App.reset();
  }
});

test("index", function() {
  // async helper telling the application to go to the '/' route
  visit("/");

  // helper waiting the application is idle before running the callback
  andThen(function() {
    equal(find("nav").find("a").length, 3, "There are three items in menu.");
  });
});

test("new", function(){
    visit("/new");

    andThen(function(){
        equal(find("li").length, 3, "There are threee items in menu");
    })
});