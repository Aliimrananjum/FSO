import { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood =() =>{
    setGood(good + 1);
  }
  
  const addNeutral =() =>{
    setNeutral(neutral + 1);
  }
  
  const addBad =() =>{
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={addGood}>Good</button>
      <button onClick={addNeutral}>Neutral</button>
      <button onClick={addBad}>Bad</button>

      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>Average {(good-bad)/(good+neutral+bad)}</p>
      <p>Positive {(good/(good+neutral+bad))*100} %</p>

    
    </div>
  )
}

export default App