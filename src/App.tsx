import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type Synonym = {
  word: string;
  score: number;
};

const BASE_URL = import.meta.env.API_URL ??`https://api.datamuse.com`;

function App() {
  
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);

  const [word, setWord] = useState("");

  const handleFetchSynonyms = (e) => {
    e.preventDefault(); 
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((response) => response.json())
      .then(setSynonyms)
  }



  return <div className='App'>
    <form onSubmit={handleFetchSynonyms}>
      <label htmlFor="word-input">Your word </label>
      <input value={word} onChange={(e) => setWord(e.target.value)} id='word-input'></input>
      <button>Submit</button>
    </form>

    <ul>
      {synonyms.map((synonym) => (
        <li key={synonym.word}>{synonym.word}</li>
      ))}
    </ul>
  </div>;
}

export default App
