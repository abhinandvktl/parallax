import { useState } from 'react';
import './App.css';
import img1 from './images/mountain1.png'
import img2 from './images/mountain2.png'
import text from './images/text.png'


function App() {
  const [offSet, setOffset] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)
  window.addEventListener('scroll', handleScroll)

  return (
    <>
      <div className='App'>
        <div className='zoom'>
          <img src={img1} alt="" id="img1" style={{ width: 100 + offSet * 0.3 + "%" }} />
          <img src={img2} alt="" id="img2" style={{ width: 100 + offSet * 0.3 + "%" }} />
          <img src={text} alt="" id="text" style={{ top: `-${8 + offSet * 0.3 + "%"}` }} />
        </div>

        <div className='content'>
          <h2>Simple parallax effect with React</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus labore, numquam ea non inventore corrupti aut et illo incidunt, suscipit in quisquam ullam nobis. Cupiditate obcaecati nemo corrupti laboriosam dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, illo rem! Molestias dolores aliquam quibusdam assumenda nulla dolorum, consequuntur, cum ea autem sed error, ab adipisci illo placeat maiores non.</p>
        </div>
      </div>
    </>
  );
}

export default App;
