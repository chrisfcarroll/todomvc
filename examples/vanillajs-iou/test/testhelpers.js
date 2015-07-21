typeLetters = function (str, el) {
  var $e= doc(el).focus();
  for (var i = 0; i < str.length; i++) {
    $e.value= str.substr(0,i);
    $e.trigger($.Event("keydown", { keyCode: str.charCodeAt(i) }));
    $e.trigger($.Event("keyup", { keyCode: str.charCodeAt(i) }));
    $e.trigger($.Event("keypress", { keyCode: str.charCodeAt(i) }));
  }
}

QUnit.assert.contains = function( needle, haystack, message ) {
  var actual = haystack.indexOf(needle) > -1;
  this.push(actual, actual, needle, message);
};

QUnit.assert.greaterThan = function( actual, expected, message ) {
  var result = actual > expected;
  this.push(result, actual, expected, message);
};

QUnit.assert.lessThan = function( actual, expected, message ) {
  var result = actual < expected;
  this.push(result, actual, expected, message);
};

QUnit.assert.that = function( actual, result, message ) {
  this.push( result, actual, expected, message);
};
