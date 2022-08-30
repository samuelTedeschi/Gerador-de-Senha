let sliderElement = document.querySelector("#slide")
let buttonElement = document.querySelector("#button")

let valorSize = document.querySelector("#valor")
let senha = document.querySelector("#senha")

let senhaGerada = document.querySelector("#container-senha")

let charset = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let novaSenha = "" 

valorSize.innerHTML = sliderElement.value;

slide.oninput = function(){
	valorSize.innerHTML = this.value
}

function gerarSenha () {

	let pass = ""

	for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
		pass += charset.charAt(Math.floor(Math.random() * n))
	}
	
	senha.innerHTML = pass
	novaSenha = pass
}

function copiarSenha () {
	alert("Senha Copiada")
	navigator.clipboard.writeText(novaSenha)
}