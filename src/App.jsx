import LeftCard from './components/left-card';
import RightCard from './components/right-card';

import './App.css'

function App() {

  return (
    <div className="App">
      <div className='card-container'>
        <LeftCard />
        <RightCard />
      </div>
    </div>
  )
}

export default App
