
//if I'm log in the msg Welcome Prags Should be display if other is log in then msg Welcome Guest should be display
const userGreet=()=>{
    var isLogedIn = false
    return (
        <div>
            Welcome {isLogedIn ? "Prags" : "Guest"}
            Welcome {isLogedIn && "Prags"}
        </div>
    )
}

export default userGreet

