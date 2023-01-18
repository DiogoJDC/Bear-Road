let xAtor = 400;
let yAtor = 650;
let velocidadeAtor = 3;
let colisao = false;
let meuspontos = 0;

function monstraAtor()
{
  image(iAtor, xAtor, yAtor, 50, 50);
}

function movimentoAtor()
{
  if(keyIsDown(87) || keyIsDown(UP_ARROW))
  {
   if(yAtor > 0)
   {
     yAtor -= velocidadeAtor;
   } 
  }
  
  if(keyIsDown(83) || keyIsDown(DOWN_ARROW))
  {
   if(yAtor < 650)
   {
     yAtor += velocidadeAtor;
   } 
  }
  
  if(keyIsDown(68) || keyIsDown(RIGHT_ARROW))
  {
    if(xAtor < 750)
    {
      xAtor += velocidadeAtor;
    }
  }
  
  if(keyIsDown(65) || keyIsDown(LEFT_ARROW))
  {
    if(xAtor > 0)
    {
      xAtor -= velocidadeAtor;
    }
  }
}

function verificaAColisao()
{
  for(let i = 0; i < iCarros.length; i++)
  {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 18);
  
    if(colisao)
    {
      xAtor = 400;
      yAtor = 650;
      meuspontos = 0;
      somColisao.play();
    }
  }
}

function pontos()
{
  textAlign(CENTER);
  textSize(30)
  fill(255,69,0)
  text(meuspontos, 775, 30);
}

function marcaPonto()
{
  if(yAtor < 0)
  {
    meuspontos += 1;
    xAtor = 400;
    yAtor = 650;
    somPonto.play();
  }
}