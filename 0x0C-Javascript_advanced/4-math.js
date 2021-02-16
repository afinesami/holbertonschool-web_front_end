function divideBy (firstNumber) {
  return function (secondNumber) {
    return secondNumber / firstNumber
  }
}

function addBy (firstNumber) {
  return function (secondNumber) {
    return firstNumber + secondNumber
  }
}

const addBy100 = function (a) {
  return addBy(100)(a)
}

const addBy1000 = function (a) {
  return addBy(1000)(a)
}

const divideBy10 = function (a) {
  return divideBy(10)(a)
}

const divideBy100 = function (a) {
  return divideBy(100)(a)
}
