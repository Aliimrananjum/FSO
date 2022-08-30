import { useState } from 'react'

const Button = ({onClick, name}) =>{
  return(
    <button onClick={onClick}>{name}</button>
  )
}

const Statistics = ({good,neutral,bad}) =>{
  return(
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>Average {(good-bad)/(good+neutral+bad)}</p>
      <p>Positive {(good/(good+neutral+bad))*100} %</p>
      </div>
  )
  
}


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
      <Button onClick={addGood} name={"Good"}/>
      <Button onClick={addNeutral} name={"Neutral"}/>
      <Button onClick={addBad} name={"Bad"}/>


      <h1>Statistics</h1>

      <Statistics bad={bad} good={good} neutral={neutral}/>


    
    </div>
  )
}

export default App