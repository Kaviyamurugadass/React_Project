
export default function GameBoard({selectSymbol,board}) {
     
    
    return (
        <ol id="game-board">
            {board.map((row, rIndex) => <li key={rIndex}>
                <ol>{row.map((symbol, cIndex) => <li key={cIndex}>
                    <button onClick={() => selectSymbol(rIndex, cIndex)} disabled={symbol!=null}>{symbol}</button></li>)}</ol>
            </li>)}

        </ol>

    );
}
