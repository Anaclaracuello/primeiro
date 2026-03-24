const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/vestidos">Vestido</a>
  </div>
   `

   res.send(html);
});

app.get('/camisas', (req, res) => {
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/vestidos">Vestido</a>
  </div>

  <p>Polo branca: R$100,00. <a href="/camisas/branca">Ver mais</a></p>
  <p>Polo azul: R$100,00. <a href="/camisas/azul">Ver mais</a></p>
   `

   res.send(html);
});

app.get('/camisas/:prod', (req, res) => {


 if (req.params.prod=='branca'){
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/vestidos">Vestido</a>
  </div>

  <p>Polo branca</p>
  <p>R$100,00</p>
  <p>Tamanhos: P, M, G, GG</p>
   `

   res.send(html);
}

 else if (req.params.prod=='azul'){
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/vestidos">Vestido</a>
  </div>

  <p>Polo azul</p>
  <p>R$100,00</p>
  <p>Tamanhos: P, M, G, GG</p>
   `

   res.send(html);
}
});

app.get('/bermudas', (req, res) => {
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/vestidos">Vestido</a>
  </div>

  <p>Bermuda azul: R$100,00. <a href="/bermudas/azul">Ver mais</a></p>
  <p>Bermuda verde: R$100,00. <a href="/bermudas/verde">Ver mais</a></p>
   `

   res.send(html);
});

app.get('/bermudas/:prod', (req, res) => {

  if (req.params.prod=='azul'){
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/vestidos">Vestido</a>
  </div>

  <p>Bermuda azul</p>
  <p>R$100,00</p>
  <p>Tamanhos: P, M, G, GG</p>
   `

   res.send(html);
  }

  else if (req.params.prod=='verde'){
   const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/vestidos">Vestido</a>
  </div>

  <p>Bermuda verde</p>
  <p>R$100,00</p>
  <p>Tamanhos: P, M, G, GG</p>
   `

   res.send(html);
  }
});

app.get('/vestidos', (req, res) => {
  const html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/vestidos">Vestido</a>
  </div>

  <p>Vestdo Prada: R$1500,00. <a href="/vestidos/prada">Ver mais</a></p>
  <p>Vestido preto: R$80,00. <a href="/vestidos/preto">Ver mais</a></p>
   `

   res.send(html);
});

app.get('/vestidos/:prod', (req, res) => {

  let html = `
  <div>
  <a href="/camisas">Camisas</a>
  <a href="/bermudas">Bermudas</a>
  <a href="/vestidos">Vestido</a>
  </div>`


  if (req.params.prod=='prada'){
  html += 
  `<p>Vestido Prada</p>
  <p>R$1500,00</p>
  <p>Tamanhos: P, M, G, GG</p>
   `

  }
  else if (req.params.prod=='preto'){
    html += `
    <p>Vestido preto</p>
  <p>R$80,00</p>
  <p>Tamanhos: P, M, G, GG</p>
   `

  }
   res.send(html);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
