import React from "react";
import {useSelector,useDispatch} from 'react-redux'
function Auth(){
    const context=useSelector((state)=>state.count)
    console.log(context+ " val")
    const center={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100vw",
        height:"100vh"
    }
    const gap={
        margin:"20px"
    }
    function submit(e){
        e.preventDefault();
        console.log()
        const id=e.target[0].value;
        const p=e.target[1].value;
    }
    return(
        <div className="LoginContainer" style={center}>

                <form onSubmit={submit} className="loginCard" style={{display:"flex",width:"30%",height:"60%",flexDirection:"column",backgroundColor:"black",color:"white",justifyContent:"center",alignItems:"center",borderRadius:"10px"}}>
                    <h1 style={gap}>Login</h1>
                    <label htmlFor="email" style={gap}>
                    Email: 
                        <input type="text" id="email" placeholder="email" style={gap}/>
                    </label>
                    <label htmlFor="password" style={gap}>
                    Password:
                    <input type="password" id="password" placeholder="Password" style={gap} />
                    </label>
                    <label htmlFor="submit">
                        <input type="submit" id="submit" value="Submit"/>
                    </label>
                </form>
        </div>
    )
}

export default Auth;