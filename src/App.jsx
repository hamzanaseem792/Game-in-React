import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import { useState } from "react"
import Log from "./Components/Log"
import { WINNING_COMBINATIONS } from "./Components/winning_Combination"
import GameOver from "./Components/Gameover"
// we can drive our winner by making new state but we can not do it in this way, because we have learned that used the as less state as possible that ius the good practice 
const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
  ]
  

// to finish this project lets make anothe component which is Gameover that will show the message when someone is won or game is draw and it will render the symbol and name of person who is won , and also a button which can show to restart the game 




function derieveActivePlayer(gameturn){
  let currentPlayer = 'X';
  if (gameturn.length > 0 && gameturn[0].player === 'X'){
    currentPlayer ='O'
  }
  return currentPlayer;
}

function App() {
  const [gameturn,setGameTurn] = useState([])
  // const [activePlayer,setActivePlayer]= useState('X')
  const activePlayer= derieveActivePlayer(gameturn);
  let gameBoard =[...initialGameBoard.map((array)=>[...array])];
  for(const turn of gameturn){
      const {square,player} = turn ;
      const {row,col} = square;
      gameBoard[row][col]= player;
  }
  let winner= null;
  for(const combination of WINNING_COMBINATIONS){
   const firstsquaresymbol = gameBoard [combination[0].row] [combination [0].column]
   const secondsquaresymbol=gameBoard [combination[1].row] [combination [1].column]
    const thirdsquaresymbol = gameBoard [combination[2].row] [combination [2].column]
    if(firstsquaresymbol
       && firstsquaresymbol===secondsquaresymbol &&
       firstsquaresymbol===thirdsquaresymbol){
        winner= firstsquaresymbol
       }
  }

  const hasDraw = gameturn.length === 9 && !winner ;
   function handleSelectSquare (rowIndex,colIndex){
    //setActivePlayer((currentActivePlayer)=> currentActivePlayer === 'X' ? "O" : "X")
    setGameTurn((prevTurns)=>{
      const currentPlayer = derieveActivePlayer(prevTurns)
      const updatedTurns = [{square : {row:rowIndex , col:colIndex}, player:currentPlayer},...prevTurns]
      return updatedTurns;
    })
   }
   function handleRestart(){
    setGameTurn([]);
   }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
          <Player 
          name="Player1"
          symbol="X"
          isActive={activePlayer==='X'}
          />
              <Player 
          name="Player2"
          symbol="O"
          isActive={activePlayer==='O'}

          />
          
         
    
      

        </ol>
        {(winner || hasDraw) && <GameOver  winner={winner} onStart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} 
        board={gameBoard}    />
      </div>
     <Log turns={gameturn} />
     
    </main>
  )
}

export default App


// I need a Componenet  for name of player which are playing the game and laso need a edit button to edit the name 
// then another camponetn where game will be played 
// the last component which hold the information that which spot is locked 
//as we notice we are putting two times same data for two different players it means we have to create an component 

// whenever you are using a react component again , it makes the isolated instance of that component , that need seprate interacction from the previous one
// lets make an objet or array of winning combination in the app component so we can work here 