import './App.css';
import Gameboard from './components/Gameboard';
import { useState } from 'react';
import memoryCards from './cards';

function App() {

  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [seen, setSeen] = useState(new Set());
  const [cards, setCards] = useState(memoryCards);


  const checkForHighScore = (score) => {if(score>highScore) setHighScore(score);}
  const randomizeCards = () => {
    setCards(cards.sort(() => Math.random() - 0.5));
  }
  const checkIfSeen = (id) => {
    if(seen.has(id)){
      checkForHighScore(score);
      setScore(0);
      seen.clear();
      randomizeCards();
    }else{
      setSeen(seen.add(id)); 
      setScore(score+1);
      randomizeCards();
    }
    console.log("score:"+score+"\nhigh score:"+highScore);
  }
  


  return (
    <div className="App">
      <header className="App-header">
      <h2>High Score: {highScore}</h2>
        <h2>Score: {score}</h2>
      <Gameboard checkIfSeen={checkIfSeen} cards = {cards}/>
      </header>
    </div>
  );
}

export default App;
