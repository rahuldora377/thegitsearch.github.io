// let URL="https://api.github.com/users/USERNAME"
let responseData;

let input = document.getElementById('search');
let btn = document.getElementById('submit');
let userName = document.getElementById('username');
let Bio = document.getElementById('bio');
let userImg = document.getElementById('user-img');
let profileLink = document.getElementById('profile-link');
let modalName = document.getElementById('name');
let modalcreatedAt = document.getElementById('created-at');
let modalLastUpdate = document.getElementById('Last-update');
let mainRow = document.getElementById('main-row');


btn.addEventListener('click', () => {
	if (input.value.length === 00) {
		console.log("No input")
	} else {
		let URL = `https://api.github.com/users/${input.value}`
		console.log(URL)
		async function getData() {
			let response = await fetch(URL);
			let data = await response.json();
			if (data['message'] !== "Not Found") {
				input.classList.remove('is-invalid')
				input.classList.add('is-valid')
				responseData = data;
				setData()
			}
			else{
				// run when user name is invalid
				mainRow.classList.add('d-none')
				input.classList.remove('is-valid')
				input.classList.add('is-invalid')
			}
		}
		getData()
	}
})

function setData() {
	mainRow.classList.remove('d-none')
	userName.textContent = responseData['login']
	Bio.textContent = responseData['bio']
	userImg.src = responseData['avatar_url']
	profileLink.href = responseData['html_url']
	modalName.innerText=responseData['login']
	modalcreatedAt.innerText=responseData['created_at']
	modalLastUpdate.innerText=responseData['updated_at']
	console.log(responseData)
}

// avatar_url