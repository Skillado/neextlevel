import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


// Route params : Identificar qual recurso eu quero atualizar ou deletar
// Query params : Paginacao, fitlros, ordenacao



app.get('/users',(request, response) =>{
  console.log(request.query);  
  return response.json({ message:'Hello world'});
});

//Porta de acesso ao servidor localhost:3333

app.listen(3333);
