function MediaNota(notas){
let soma = notas.reduce((total, elemento) => total + elemento, 0);
let media= soma/notas.length;
return media;
}

console.log(MediaNota([2,7,4,4,6]));