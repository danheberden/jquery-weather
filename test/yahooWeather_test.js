(function() {
  var yahooWeather = window.yahooWeather;
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('yahooWeather');

  test('is a function', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(typeof yahooWeather, 'function', 'is a function');
  });

  test('errors on bad information', function() {
    expect(1);
    stop();
    yahooWeather('abcdefghij', function(err) {
      ok(err, 'errored on a bad location');
      start();
    });
  });

  test('errors on bad information', function() {
    expect(1);
    stop();
    yahooWeather('abcdefghij', function(err) {
      ok(err, 'errored on a bad location');
      start();
    });
  });

  test('works with zip code', function() {
    expect(2);
    stop();
    yahooWeather('02210', function(err, weather) {
      strictEqual(err, null, 'no error');
      ok(weather.condition, 'weather\'s condition object returned');
      start();
    });
  });

}());
