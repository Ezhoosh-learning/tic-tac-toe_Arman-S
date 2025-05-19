import { useContext, useEffect } from "react";
import context from "../context/context";


const Result = () => {
    let value = useContext(context)


    return ( <>
        <div className="result">
            <p className="result-data">X : {value.xWins}</p>
            <p className="result-data">O : {value.oWins}</p>
            <p className="result-data" id="result-draw">draw : {value.draw}</p>
        </div>
    </> );
}
 
export default Result;