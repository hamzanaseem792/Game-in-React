import { useState } from "react"

const initialGameBoard = [
[null,null,null],
[null,null,null],
[null,null,null]
]

export default function GameBoard({onSelectSquare,board}){


    // const [gameBoard,setGameBoard] =  useState(initialGameBoard)

    // function handleonClick(rowIndex,colIndex){
    //      setGameBoard((prevGameboard)=>{
    //         const updatedGameBoard = [...prevGameboard.map(innerArray=>[...innerArray])]
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbole;
    //         return updatedGameBoard;
    //      })

    // onSelectSquare()
    
    //     }
    
    return(
      
        <>
        <ol id="game-board">
     {board.map((row,rowIndex)=>(
      <li key={rowIndex}>
           <ol>
            {row.map((playerSymbol,colIndex)=>(
                <li key={colIndex}>
                    <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>
            ))}
            
            </ol> 


      </li>

 


     ))}
        </ol>
        </>
    )
}


// I am going to declare an const variable up there to dynamically render the thinhgs 