import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  }

  const onClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);  
    } 
  }

  return (
    <div className="App">
      <div>
        <h1>Счетчик:</h1>
        <h2>{count}</h2>
        <button className="minus" onClick={onClickMinus}>          
          - Минус
        </button>
        <button className="plus" onClick={onClickPlus}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
