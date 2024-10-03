import { useLocation, useParams } from "react-router-dom";
export default function Posts(){
    const {id}=useParams();
    const urlstring = new URLSearchParams(useLocation().search);
    const fname=urlstring.get("fname");
    const lname=urlstring.get("lname");
    return (
        <div>
            <h1>This is Posts page Hello {fname} {lname} {id}</h1>
            <h2>Hi</h2>
            
        </div>
    )
}