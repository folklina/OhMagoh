import { useEffect, useState } from "react";
import "../utils/App.css";


export default function ApiScr() {
  const [conteudo, setConteudo] = useState(<></>);
  const [busca, setBusca] = useState("");

  async function carregarTodosOsPersonagens() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const result = await fetch(
      "https://rickandmortyapi.com/api/character" + busca,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));

    const char = JSON.parse(result);

    return char.results;

  }

  function traduzirStatus(status) {
    switch (status) {
      case "Alive":
        return "Vivo";
      case "Dead":
        return "Morto";
      case "unknown":
        return "Desconhecido";
      default:
        return status;
    }
  }

  function traduzirEspecie(species) {
    switch (species) {
      case "Human":
        return "Humano";
      case "Alien":
        return "Alien";
      case "Mythological Creature":
        return "Criatura Mítica";
      case "Humanoid":
        return "Humanoide";
      case "Animal":
        return "Animal";
      case "Poopybutthole":
        return "Poopybutthole";
      case "Disease":
        return "Doença";
      case "Robot":
        return "Robô";
      case "Vampire":
        return "Vampiro";
      case "Cronenberg":
        return "Cronenberg";
      case "Parasite":
        return "Parasita";
      case "unknown":
        return "Desconhecido";
      default:
        return species;
    }
  }

  function traduzirGenero(gender) {
    switch (gender) {
      case "Male":
        return "Masculino";
      case "Female":
        return "Feminino";
    }
  }

  async function listaPersonagem() {
    const todosPersonagens = await carregarTodosOsPersonagens();
    return todosPersonagens.map((personagem) => (
      <div className="card char">
        <img src={personagem.image} alt={personagem.name} />
        <p className="minititulo">
          <strong>Nome: </strong>
          {personagem.name}
        </p>
        <p className="minititulo">
          <strong>Especie: </strong>
          {traduzirEspecie(personagem.species)}
        </p>
        <p className="minititulo">
          <strong>Genero: </strong>
          {traduzirGenero(personagem.gender)}
        </p>
        <p className="minititulo">
          <strong>Episodio: </strong>
          {personagem.episode.map((ep) => (
            <span key={personagem.name + ep.split("episode/")[1]}>
              Ep-{ep.split("episode/")[1]}{" "}
            </span>
          ))}
        </p>
        <p className="minititulo">
          <strong>Status: </strong>
          {traduzirStatus(personagem.status)}
        </p>
      </div>
    ));
  }

  useEffect(() => {
    async function carregar() {
      setConteudo(await listaPersonagem());
    }
    carregar();
  }, [busca]);

  return (
    <div className="App">
      <header className="cabecalho">
        <h1 className="titulo">Rick and Morty API</h1>
      </header>
      <div className="lista-principal">{conteudo}</div>
    </div>
  );
}

// export default App;