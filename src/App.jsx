import { Avatar, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Filme from "./components/Filme";


function App(props) {

  const[filmes, setFilmes]=useState();
  const[erro, setErro]=useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND + "filmes" ,{
      method: "GET",
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then( (reposta) => reposta.json() )
    .then( (json) => {setFilmes(json) } )
    .catch( (erro) => { setErro( true )} )
    },[])
  
  function Excluir(evento, id ){
    evento.preventDefault();
    fetch(process.env.REACT_APP_BACKEND + "filmes" ,{
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          {
            id: id
          }
      )
  })
  .then( (reposta) => reposta.json() )
  .then( (json) => {
          const novaLista = filmes.filter( (filmes) => filmes._id !== id);
          setFilmes( novaLista );
  } )
  .catch( (erro) => { setErro( true )} )
  }
    



  return (
    <>
      <h1>Filmes</h1>
      <Container sx={{
        display: "flex",
        flexFlow: "row",
        flexWrap: "wrap",
        gap:"2rem"
      }}>

      
      {filmes && (
        filmes.map((filme, index) => ( 
          <div>
            <Filme
              img={filme.imagem}
              titulo={filme.titulo}
              descricao={filme.descricao}
              duracao={filme.duracao}
              ano={filme.ano}
              categoria={filme.categoria}
              excluir={(e) => Excluir(e, filme._id)}
              id={filme._id}
            />
            <br />
          </div>
        )) 
      )}
      </Container>
    </>
  );
}
export default App;
