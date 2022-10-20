import { useState } from "react"


const Forms=()=>{
    const [name, setName] = useState(" ");
    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`This is a form of ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                {/* The events, that has to change is given as a atrribute */}
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} ></input> 
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Forms