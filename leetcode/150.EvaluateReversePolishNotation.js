/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const stack = []

  /**
   * @param  {number} num1
   * @param  {number} num2
   * @param  {('+'|'-'|'/'|'*')} operator
   * @return {number}
   */
  const calc = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '/':
        return Math.trunc(num1 / num2)
      case '*':
        return num1 * num2
      default:
        throw new Error('not valid')
    }
  }

  for (const token of tokens) {
    if (token === '+' || token === '-' || token === '/' || token === '*') {
      const num2 = Number(stack.pop() ?? 0)
      const num1 = Number(stack.pop() ?? 0)

      stack.push(calc(num1, num2, token))
      continue
    }

    stack.push(token)
  }

  return stack[0]
}
// console.log(evalRPN(["2","1","+", '3', '*']))
// console.log(evalRPN(["4","13","5","/","+"]))
console.log(
  evalRPN([
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+',
  ]),
)
