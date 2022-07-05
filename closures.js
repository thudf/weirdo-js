// CLOSURES

function buildFunctions() {
  var arr =[];

  for (var i = 0; i < 3; i++) {
    arr.push(
      function() {
        console.log(i);
      }
    )
  }

  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// -------------------------------------------------
// ES5

function buildFunctions2() {
  var arr =[];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i))
    )
  }

  return arr;
}

var fs2 = buildFunctions2();

console.log('es5')

fs2[0]();
fs2[1]();
fs2[2]();

// -------------------------------------------------
// ES6+

function buildFunctions3() {
  var arr =[];

  for (var i = 0; i < 3; i++) {
    const j = i;

    arr.push(
      function() {
        console.log(j);
      }
    )
  }

  return arr;
}

var fs3 = buildFunctions3();

console.log('es6+')

fs3[0]();
fs3[1]();
fs3[2]();