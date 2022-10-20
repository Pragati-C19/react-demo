import { useState } from "react";

const Message = () => {
    const [msg, setMsg] = useState("Welcome Prags");
    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={()=>setMsg("Thank You For you Time")}>Subscribe Now</button>
        </div>
    );
        
  };
  
  export default Message;
  