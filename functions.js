			let messages = new Array
			let body = ''

			function addMessage(){
				let obj = new Object
				obj.id = messages.length + 1
				obj.body = body
				obj.time = "12: 02 pm"
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

				/** 
				 * Create new div element with class .chat-r or .chat-l based on the content of from 
				 * Inject div with cla
				 * 
				 * 
				 * 
				 * 	<div class="chat-r" >	
						<div class="sp"></div>
						<div class="mess mess-r">
							<p id="mbody">
								<img src="assets/dots.png" width= 10px>
							</p>
							<div class="check">
								<span>4:00 pm</span>
								<img src="assets/check-2.png">
							</div>
						</div>				
					</div>
					* **/

				}


				// document.getElementById("mbody").innerHTML = "yayyy";
			// 	//select something- [GET ELEMENT][$("whatever tag")]
			// 	//append a child element to the selected parent[]
			// 	//inject the html to the newly appended

			const testDiv = document.getElementById('testdiv')

			testDiv.addEventListener('input', function(event){
				body = event.target.innerHTML
			})
			testDiv.addEventListener("keypress", function(event) {
				if (event.keyCode === 13) {
					event.preventDefault()
					document.getElementById("sendButton").click()
					testDiv.innerHTML = ''
				}
			})

