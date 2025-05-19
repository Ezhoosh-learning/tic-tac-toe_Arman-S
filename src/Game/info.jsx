import Reset from "./reset";
import { useContext } from "react";
import context from "../context/context";


const Info = () => {
    let value = useContext(context)

    return ( <>
        <div className="info">
            <p className="status">{value.status}</p>
            <Reset />
        </div>
    </> );
}
 
export default Info;