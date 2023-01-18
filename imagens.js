// i = imagens
let iEstrada;
let iAtor;
let iCarro1;
let iCarro2;
let iCarro3;
let iCarro4;
let iCarro5;
let iCarro6;
let iCarro7;
let iCarro8;
let iCarro9;
let iCarro10;

let somTrilha;
let somPonto;
let somColisao;

function preload()
{
  iEstrada = loadImage("imagens/estrada.png");
  iAtor    = loadImage("imagens/ator-1.png");
  iCarro1  = loadImage("imagens/carro-1.png");
  iCarro2  = loadImage("imagens/carro-2.png");
  iCarro3  = loadImage("imagens/carro-3.png");
  iCarro4  = loadImage("imagens/carro-4.png");
  iCarro5  = loadImage("imagens/carro-5.png");
  iCarro6  = loadImage("imagens/carro-6.png");
  iCarro7  = loadImage("imagens/carro-7.png");
  iCarro8  = loadImage("imagens/carro-8.png");
  iCarro9  = loadImage("imagens/carro-9.png");
  iCarro10 = loadImage("imagens/carro-10.png");
  
  iCarros = [iCarro1, iCarro2, iCarro3, iCarro4, iCarro5, iCarro6, iCarro7, iCarro8, iCarro9, iCarro10];
  
  somTrilha  = loadSound("soms/trilha-1.mp3");
  somPonto   = loadSound("soms/pontos.wav");
  somColisao = loadSound("soms/somcolisao-1.mp3")
}