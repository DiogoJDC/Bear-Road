let xCarros = [824, 830, 820, 822, 820, -85, -83, -82, -80, -88];
let yCarros = [594, 536, 476, 420, 364, 297, 240, 180, 124, 70];
let comprimentoCarros = 80;
let alturaCarros = 40;
let velocidadeCarros = [7, 3, 4, 3.5, 3, 4, 5, 5, 3, 5];

function carros()
{
  for(let i = 0; i < iCarros.length; i++)
  {
    image(iCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros)
  }
}

// Animação Carros
function vCarros()
{
  for(let i = 0; i <= 4; i++)
  {
    xCarros[i] -= velocidadeCarros[i]; 
  }
  
  for(let i = 5; i <= 9; i++)
  {
    xCarros[i] += velocidadeCarros[i];
  }
}

function voltarCarro()
{
  for(let i = 0; i <= 4; i++)
  {
    if(xCarros[i] < -80)
    {
      xCarros[i] = 700
    }
  }
  
  for(let i = 5; i <= 9; i++)
  {
    if(xCarros[i] > 820)
    {
      xCarros[i] = -80
    }
  }
}
      
      