/*doc*/

//
// testhelpers
//
typeLetters = function (str, el) {
  var $e= doc(el).focus();
  for (var i = 0; i < str.length; i++) {
    $e.value= str.substr(0,i);
    $e.trigger($.Event("keydown", { keyCode: str.charCodeAt(i) }));
    $e.trigger($.Event("keyup", { keyCode: str.charCodeAt(i) }));
    $e.trigger($.Event("keypress", { keyCode: str.charCodeAt(i) }));
  }
}

