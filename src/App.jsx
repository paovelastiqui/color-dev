import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './components/FormColor.jsx';
import DisplayColors from './components/DisplayColors.jsx';

function App() {
  const [list, setList] = useState(new Values('red').all(10));

  console.log(list);

  return (
    <div className="App">
      <FormColor setList={setList} />
      <DisplayColors list={ list } />
    </div>
  )
}

export default App
