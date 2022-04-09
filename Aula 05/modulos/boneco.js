console.log("Boneco completo");

let forca = {
    tipo_haste: "Madeira",
    tipo_corda: "Nylon"
}

boneco = {
    membros: ["Cabeça", "Braço Esquerdo", "Braço Direito", "Tronco", "Perna Esquerda", "Perna Direita"],
    nome: "Josisclayson",
    altura: 1.52,
    peso: 60
}

console.log(boneco);

// Exportação via CommonJS
module.exports = {
    boneco
}