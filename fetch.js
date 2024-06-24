import './App.css';
import { useEffect, useState } from 'react';

function GithubUser({name, order}){
  return (
    <div>
      <h1>{name}</h1>
      <h1>{order}</h1>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  if(data) return <GithubUser name={data.name} order={data.order}/>

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
