let nome, peso, altura, IMC
nome = (prompt("Digite seu nome"))
peso = Number(prompt("Digite seu peso: (Obs: Em kg)"))
altura = Number(prompt("Digite sua altura: Em centímetros)"))

result = peso/altura**2
alert("Seu índice de massa corporal é de " + result)

