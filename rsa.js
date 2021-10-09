/*implementa a função que criptografa utilizando um algoritmo RSA */
//declaração das variáveis
const txt = 'morte ao miojo'//Morte ao miojo é uma referência ao canal fábrica de noobs. Altere isso daqui, encripte o que quier e seja feliz... :D
var aux = []
	const p = 17
	const q = 23
	var n = p*q
	var i, j, e = []
	var c = []
	var M = []
	var d
	var m = []
//pré-codificação com base na tabela ascii

//function rsa(txt, p, q){

for (let i = 0; i < txt.length; i++){
	M[i] =txt.charCodeAt(i)

}


console.clear()
console.log(M.join(' '))


//geração de chaves pública e privada
//carrega os valores de n e totiente(n) com base nos p e q informados na chave privada
n = p*q
totient = (p-1)*(q-1)
//Gerador da segunda chave pública, a e
for(var i = 1; i< totient; i++){
//carrega um vetor com todos os valores que são primos em comum com a função totient(n)
	if(totient%i==1){

	aux[i]=i
	if (aux[i]!=null){
		e = i
		break
	}


	}//fim do if

}//fim do for

for (let i = 0; i < txt.length; i++){
	c[i] = (M[i]**e)%n
}


console.log(c.join(' '))


//função de desencriptação
//O número d é o inverso multiplicativo do e módulo totiente de n. Para isso, precisamos calcular a seguinte equação
//d*e=1mod(\phi). Para isso, se faz necessário, inicialmente calcular o mdc(e, totiente(n))
//função mdc(na verdade, nem precisou)
function mdc(a, b){
var resto
while(b!=0){
	resto = a%b
	a = b
	b = resto
}
	return a
}
//confesso que eu tenho dificuldade nessa parte da matemática (achei esse trecho de código no wikipédia e fiz as minhas alerações - salvou!)
function euclides(a, b){
var r = a
var r1 = b
var u = 1
var v =0
var u1 =0
var v1 = 1
//variáveis auxiliares para fazer as trocas
var rs, us, vs, q

while(r1 != 0){
	q = parseInt(r/r1)//q vai receber o quociente da divisão de a/b
	rs = r
	us = u
	vs = v
	r = r1
	u = u1
	v = v1
	r1 = rs - q*r1//É uma decomposição do tipo q*d + r
	u1 = us - q*u
	v1 = vs - q*v1
}//fim do while
//return [r, u, v]

if(v<0){
	v = v + a
}
	return v
}//fim da função euclides
d = euclides(totient, e)

for (i = 0; i < c.length; i++){
	m[i] = double((c[i]**d)%n)
}

console.log(`As chaves públicas são ${n} e ${e}`)
console.log(`As chaves privadas são ${p}, ${q} e ${d}. Guarde essas chaves com cuidado e não as perca`)
//}
console.log(`texto decriptado: ${m}`)

