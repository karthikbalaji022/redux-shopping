import React from "react";
import {useSelector,useDispatch} from 'react-redux'
function Auth(){
    const auth=useSelector((state)=>state)
    const dispatch=useDispatch();
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
        const id=e.target[0].value;
        const p=e.target[1].value;
        if(id===auth.id && p===auth.pass)
        dispatch({type:"login",payload:{val:true}})
        else{
            dispatch({type:"login",payload:{val:false}})
        }
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