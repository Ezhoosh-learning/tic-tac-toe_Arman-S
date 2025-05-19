
 function Square({value , handleSquareClick}){

    return ( <button className="squares" onClick={handleSquareClick}>
        {value}
    </button> );
}
 
export default Square;