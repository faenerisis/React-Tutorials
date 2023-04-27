import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

function Button() {
  let [counter, setCounter] = useState(0);
  return(
    <button onClick={()=> setCounter(counter + 1)}>
      {counter}
    </button>
  );
}

ReactDOM.render(
  <Button />,
  document.getElementById('root')
);
