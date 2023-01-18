function setup() 
{
  createCanvas(800, 700);
  somTrilha.loop();
}

function draw()
{
  background(iEstrada);
  monstraAtor();
  movimentoAtor();
  carros();
  vCarros();
  voltarCarro();
  verificaAColisao();
  pontos();
  marcaPonto();
}