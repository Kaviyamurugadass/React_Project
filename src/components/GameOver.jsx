export default function GameOver({Winner,over}){
    return(
        <div id="game-over">
        <h2>Game Over</h2>
        {(Winner)? <p>  {Winner}  Won!</p>:<p>Game Draw</p>}
        
        <button onClick={over}>New Game</button>
        </div>
    )
}