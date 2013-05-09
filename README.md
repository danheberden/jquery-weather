# Yahoo Weather

Get yahoo weather using zipcode or woeid

## Getting Started

Use [bower](http://bower.io)

```
bower install yahooWeather --save
```

#### or

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/danheberden/yahooWeather/master/dist/yahooWeather.min.js
[max]: https://raw.github.com/danheberden/yahooWeather/master/dist/yahooWeather.js

### Using in your web page

```html
<script src="jquery.js"></script>
<script src="dist/yahooWeather.min.js"></script>
<script>
jQuery(document).ready(function($) {
  yahooWeather('02210', function(err, weather) {
    if (err) {
      alert('uh oh: ' + err);
      return;
    }
    alert(weather.condition.temp);
  });
});
</script>
```

### Using as an amd module

```javascript
require(["components/yahooWeather/yahooWeather"], function(yahooWeather) {
  yahooWeather('02210', function(err, weather) {
    if (err) {
      alert('uh oh: ' + err);
      return;
    }
    alert(weather.condition.temp);
  });
});
```

## Documentation

In addition to the yahoo provided information in the returned weather object, 
the `weather.condition` object has a `symbols` array and `symbolLevel` string.
The `symbols` array is one or more unicode characters to represent the weather.
The `symbolLevel` string is either 'light', 'normal', or 'heavy' to represent
the weather symbol severity.

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
