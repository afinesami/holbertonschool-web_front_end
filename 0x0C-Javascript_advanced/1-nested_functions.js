const globalVariable = 'welcome '
function outer () {
  window.alert(globalVariable)
  const course = 'Holberton'
  function inner () {
    window.alert(globalVariable + course)
    const exclamation = '!'
    function inception () {
      window.alert(globalVariable + course + exclamation)
    }
    inception()
  }
  inner()
}
outer()