function calculator(number1, operador, number2){
  let result = 0

  switch (operador) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('não implementado')
      break
  }
  return result
}

//insira as informações para calculador, são 3 parâmetros
console.log(calculator())

