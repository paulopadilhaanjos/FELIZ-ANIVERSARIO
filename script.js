const mensagem = "hoje é o seu dia, e eu fico pensando no quanto eu sou sortudo por ter vc na minha vida, minha princesa. desde os seus 14 anos a gente vem vivendo tanta coisa juntos, e cada momento foi virando uma lembrança especial pra mim.\n\nàs vezes eu paro e penso em tudo que a gente já passou, nas risadas, nos momentos bons e até nos difíceis, e mesmo assim a gente continuou junto e isso só me faz ter mais certeza ainda do quanto eu te amo.\n\nvc é minha paz, meu sorriso diário, a pessoa que consegue melhorar meu dia só de existir. eu gosto de estar com vc, de conversar com vc, de viver tudo com vc… pq é vc, sempre vai ser vc.\n\neu agradeço a Deus todos os dias por ter colocado vc na minha vida, de verdade. parece que Ele pensou em cada detalhe e falou \"essa é pra ele\", pq vc me faz o homem mais feliz do mundo, e nada se compara a isso.\n\neu amo seu jeito, amo quem vc é, amo até suas manias, e amo o jeito que vc cuida de mim mesmo quando nem percebe. vc é tudo pra mim, e eu nn trocaria isso por nada.\n\neu espero que nesse novo ciclo vc seja muito feliz, que Deus abençoe cada passo seu, que vc realize seus sonhos e nunca esqueça o quanto vc é incrível e especial.\n\nfeliz aniversário, amor ❤️ eu te amo muito minha menininha , pra sempre.";

let i = 0;

const imagens = [
  'foto1.jpg',
  'foto2.jpg',
  'foto3.jpg'
];
let index = 0;

function proximaTela() {
  document.getElementById('boasVindas').classList.remove('ativa');
  document.getElementById('textoTela').classList.add('ativa');
  document.getElementById('musica').play();
  escreverTexto();
  iniciarSlideshow();
}

function escreverTexto() {
  if (i < mensagem.length) {
    document.getElementById('texto').innerHTML += mensagem.charAt(i);
    i++;
    setTimeout(escreverTexto, 40);
  }
}

function iniciarSlideshow() {
  const slide = document.querySelector('.slideshow');
  slide.style.backgroundImage = `url(${imagens[index]})`;

  setInterval(() => {
    index = (index + 1) % imagens.length;
    slide.style.backgroundImage = `url(${imagens[index]})`;
  }, 3000);
}

function criarCoracoes() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(criarCoracoes, 200);
