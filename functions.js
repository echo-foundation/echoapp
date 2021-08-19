let messages = new Array
let body = ''

function addMessage(){
	if (!body.length > 0) {
		return
	}
	let obj = new Object
	obj.id = messages.length + 1
	obj.body = body
	obj.time = moment().format('LT')
	obj.read = true
	messages.push(obj)
	testDiv.innerHTML= ''
	obj.from = obj.id % 2 > 0 ? "him" : "me"

	let chatContainer = document.getElementById('chatContainer')
	chatContainer.insertAdjacentHTML('beforeend',  `<div class="sp"></div>
		<div class="mess ${ obj.from === 'me' ? 'mess-r' : 'mess-l'}">
		<p>${obj.body}</p>
		<div class="check">
		<span>${obj.time}</span>
		<img src="assets/check-2.png">
		</div>
		</div>`)

	body = ''

}


let lastSeen = document.getElementById('lastSeen')
lastSeen.innerHTML = "Last seen" + " " + moment().endOf('obj.from === me').fromNow();



const testDiv = document.getElementById('testdiv')

testDiv.addEventListener('input', function(event){
	body = event.target.innerHTML
})
testDiv.addEventListener("keypress", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault()
		document.getElementById("sendButton").click()
	}
})

