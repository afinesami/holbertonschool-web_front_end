function welcome (firstName, lastName){
	const fullName = firstName + ' ' + lastName
	function displayFullName () {
		window.alert('welcome ' + fullName + '!')
	}
	displayFullName()
}