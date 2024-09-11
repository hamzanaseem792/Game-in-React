export default function GameOver({winner ,onStart}){
    return(
        <div id="game-over">
            <h2>Game over </h2>
           {winner && <p>{winner} won !</p>}
           {!winner && <p>its a draw</p>}
                       <p><button onClick={onStart}>Rematch</button></p>
        </div>
    )
}