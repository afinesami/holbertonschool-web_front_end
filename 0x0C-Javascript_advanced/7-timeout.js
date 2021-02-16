console.log('Start of the execution queue')
window.setTimeout(function () { console.log('Final code block to be executed') }, 0)
for (let i = 1; i <= 100; i++) {
  console.log(i)
}
console.log('End of the loop printing')