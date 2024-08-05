export default function Log({ truns,name }){
  
    return(
      <ol id='log'>
       
       {truns.map((trun) => {
        const playerName = trun.player === 'X' ? name.X : name.O;
        return(
        <li key={`${trun.Index.row}${trun.Index.col}`}> 

         PLAYER: {playerName} -- {trun.player} -- SELECTED:{trun.Index.row},{trun.Index.col}</li>
         );
        })}
       
      </ol>
    );
  }
