let frase = "Aprender JavaScript é divertido!";
console.log(frase.length); 


let frase1 = "JavaScript é incrível";
console.log(frase1.toUpperCase());


let nome = "Ana Clara";
let novoNome = nome.replace("Ana", "Maria");
console.log(novoNome);


let frase2 = "Eu gosto de programar!";
console.log(frase2.includes("gosto"));


let palavra = "Computador";
console.log(palavra.substring(2,5));


let senha = "JavaScript123";

if(senha.length == 8){
    console.log("Senha válida")
}else{
    console.log("Senha inválida")
};


let texto ="Eu amo programar em JavaScript";

if(texto.includes("JavaScript")){
    console.log("Palavra encontrada")
}else{
    console.log("Palavra não encontrada")
}