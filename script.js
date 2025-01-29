//Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.two',
      start: '0% 95%',
      end: '70% 50%',
      scrub: true,
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '0%',
    },
    'orange'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' PARA 160% DO TOPO
        left: '23%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' 23% PARA A ESQUERDA
    },
    'orange'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO

tl.to(
    '#laranja',
    {
        width:'15%',
        top: '170%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' PARA 160% DO TOPO
        right: '5%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' 23% PARA A ESQUERDA
    },
    'orange'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO

tl.to(
    '#folha',
    {
        top: '110%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' PARA 160% DO TOPO
        rotate: '530deg',
        left: '70%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' 23% PARA A ESQUERDA
    },
    'orange'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO

tl.to(
    '#folha2',
    {
        top: '110%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' PARA 160% DO TOPO
        rotate: '530deg',
        left: '0%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' 23% PARA A ESQUERDA
    },
    'orange'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO

//CRIANDO OUTRA TIMELINE

var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:'.three',
      start: '0% 95%',
      end: '20% 50%',
      scrub: true,
    },
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' PARA 160% DO TOPO
        top: '110%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' 23% PARA A ESQUERDA
    },
    'ca'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' PARA 160% DO TOPO
        top: '110%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' 23% PARA A ESQUERDA
    },
    'ca'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO

tl2.from(
    '.lemon2',
    {
        rotate: '-90deg',
        left: '100%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' PARA 160% DO TOPO
        top: '110%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' 23% PARA A ESQUERDA
    },
    'ca'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO

tl2.from(
    '#pepsi',
    {
        rotate: '-90deg',
        left: '100%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' PARA 160% DO TOPO
        top: '110%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' 23% PARA A ESQUERDA
    },
    'ca'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO


tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' PARA 160% DO TOPO
        top: '205%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' 23% PARA A ESQUERDA
    },
    'ca'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO

tl2.to(
    '#fanta',
    {
        width:'35%',
        left: '33%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' PARA 160% DO TOPO
        top: '213%', //MOVE O ELEMENTO COM ID 'ORANGE-CUT' 23% PARA A ESQUERDA
    },
    'ca'
); //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO






