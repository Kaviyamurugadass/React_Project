import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './WinningCombination';
import GameOver from './components/GameOver';

const PLAYER = 
  {
    X:'Name 1',
    O:'Name 2',
  }

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

//this function is for log - return the symbol & also used for 
function derivedplayer(truns){
  let currentPlayer = 'X';
    if(truns.length > 0 && truns[0].player==='X'){
      currentPlayer = 'O';
    }
    return currentPlayer;   
}

function winnerfunc(gameBoard,playeraName){
  let winner; 

for(const combination of WINNING_COMBINATIONS){
  const fisrtSqure = gameBoard[combination[0].row][combination[0].column];
  const secondSqure =  gameBoard[combination[1].row][combination[1].column];
  const thirdSqure =  gameBoard[combination[2].row][combination[2].column];

  if(fisrtSqure && fisrtSqure===secondSqure && secondSqure === thirdSqure){
    winner = playeraName[fisrtSqure];
    
  }
}
 return winner;

}

function derivedGameBoard(truns){
 let gameBoard = [...INITIAL_GAMEBOARD.map(array=>[...array])];
//  let gameBoard = initialGameBoard;

 for(const trun of truns){ //truns - array of objects
   const {Index,player} = trun;
   const {row,col} = Index;
   gameBoard[row][col] = player;
}
return gameBoard;
}

function App() {

  
  const [playeraName,setPlayerName] = useState(PLAYER)
  
  const [truns,setTurns] = useState([]);


  const activePlayer = derivedplayer(truns)
  
  const gameBoard = derivedGameBoard(truns);
 


let winner = winnerfunc(gameBoard,playeraName);
let draw = truns.length === 9 && !winner;    


  function handleSelectSqure(rIndex,cIndex){
  
    setTurns((prePlayer)=>{
      const UpdatedTruns = [
        {Index:{row:rIndex, col:cIndex}, player:activePlayer},
        ...prePlayer,
      ];
      return UpdatedTruns;
    });
    
  }
  // function handleGameOver(){
  //   setTurns([]);
  // }
  function handleChangePlayerName(symbol,NewName){
    setPlayerName(preplayer => {
      return{
      ...preplayer,
      [symbol]:NewName
      };
    });
  }
  
  return (
   <main>
    <div id="game-container">
    <ol id="players" className="highlight-player">
        <Player name={PLAYER.X} symbol="X" isActive={activePlayer==='X'} onChangeName={handleChangePlayerName}/>
        <Player name={PLAYER.O} symbol="O"  isActive={activePlayer==='O'} onChangeName={handleChangePlayerName}/>
    </ol>
    {(winner || draw) && <GameOver Winner={winner} over={()=>setTurns([])}/>}
    
    <GameBoard selectSymbol={handleSelectSqure} board={gameBoard}/>
     </div>
     <Log truns={truns} name={playeraName}/>
    </main>
  );
}

export default App
