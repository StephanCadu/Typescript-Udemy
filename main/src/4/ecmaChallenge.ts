// 1 traduzir pra typescript
// var dobro = function(valor) {
//   return valor * 2
//   }
//   console.log(dobro(10))

const dobro = (valor: number): number => valor * 2

console.log(dobro(10))

// 2 refatoração
// var dizerOla = function (nome) {
//   if (nome === undefined) { nome = "Pessoa" }
//   console.log("Ola, " + nome)
//   }
//   dizerOla()
//   dizerOla("Anna")

const dizerOla = (nome: string = 'Pessoa'): void => console.log(`Olá ${nome}`);
dizerOla()
dizerOla("Anna")

// 3 imprimir menor valor
// var nums = [-3, 33, 38, 5]
// console.log('???')

const nums: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// 4 adicionar array em outro
// var nums = [-3, 33, 38, 5]
// var array = [55, 20]
// console.log(array)

const array: number[] = [55, 20]
array.push(...nums)
console.log(array)

// 5 destructuring
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2]
// console.log(nota1, nota2, nota3)

const [nota1, nota2, nota3]: number[] = [8.5, 6.3, 9.4]
console.log(nota1, nota2, nota3)

// 6 destructuring
// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)
type funcionario = { primeiroNome: string, experiencia: number }
const { primeiroNome, experiencia }: funcionario = {primeiroNome: "Will", experiencia: 12}
console.log(primeiroNome, experiencia)