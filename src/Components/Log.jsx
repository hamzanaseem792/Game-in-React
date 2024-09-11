export default function Log({turns}) {
    return (
        <ol id="log">
            {turns.map((turn)=>  (
                <li key={`${turn.square.row }${turn.square.col}`}>
                    {turn.player} selected {turn.square.row},{turn.square.col}
                </li>
            ))}
        {/* <h1>here is log of my website </h1> */}
        </ol>
    )
}
// the idea about this component is eto render differnet turns below the game box 
// as button is cliked the data in array grow so it is abovius we have to manage state where turns are chnaging 