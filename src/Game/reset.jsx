import { useContext } from "react";
import context from "../context/context";


const Reset = () => {
    let value = useContext(context)

    function handlereset(){
        value.setsquares(Array(9).fill(null))
    }

    return ( <>
        <button className="btn-reset" onClick={handlereset}>
            reset
        </button>
    </> );
}
 
export default Reset;