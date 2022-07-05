var myvar = 2

function a () {
  // console.log(myvar)
  // console.log(myvar)

  function b () {
    console.log(myvar)
  }

  b()
  c()
}

function c () {
  // var myvar = 1
  console.log(myvar)
}

a()