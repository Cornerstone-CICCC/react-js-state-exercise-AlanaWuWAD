import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';
import { useState } from 'react';

const App = () => {
  const [lightToggle, setLightToggle] = useState<boolean>(false)

  const handleLightToggle = () => {
    setLightToggle(!lightToggle)
  }

  const [lottoNumber, setLottoNumber] = useState<number[]>([])

  const handleLotto = () => {
    let num = new Set()
    while ( num.size < 7) {
      num.add(getRandom(1, 50))
    }
    let numbers = Array.from(num)
    setLottoNumber(numbers)
  }


  function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }


  return (
    <div style={{
      backgroundColor: lightToggle ? 'black' : 'white',
      color: lightToggle ? 'white' : 'black'
    }}>
      <h2>Light Toggle</h2>
      <LightToggle onToggle={handleLightToggle} />
      <div>Change this background color using the style attribute</div>

      <h2>Lotto Numbers </h2>
      <LottoNumbers onToggle={handleLotto} />
      <div className="output">  
        {lottoNumber.map((num, index) => (
        <span key={index} style={{ marginRight: '10px' }}>{num.toString().padStart(2, '0')}</span>
      ))}
      </div>

      <h2>Click Counter</h2>
      <ClickCounter />
      
    </div>
  );
};

export default App;