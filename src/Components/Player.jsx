import { useState } from "react"

export default function Player(props) {

       // useState({props.name})
   const [PlName,setPlName]=useState(props.name)    
   const[isEditing,setIsEditing]= useState(false)
   function handleButton(){
    return(
        //setIsEditing(isEditing ? false : true)
        //we can also do it in a short way 
        //setIsEditing(!isEditing)
        // but this is also  not a godd practice You should not change the state directly , react experts says if you want to change the state you must use the function to change the state 
        setIsEditing((prevState)=> !prevState)
    )}

   function handleChange(event){
    setPlName(event.target.value)

   }

    let playerName= <span className="player-name">{PlName}</span>
   // let btnCaption= "Edit"
    if(isEditing){
        playerName= <input type="text" required Value={PlName} onChange={handleChange}></input>
     //   btnCaption="Save"
    }
   
    return(
        <li className={props.isActive ? "active" : "Undefined"}>
        <span className="player">
             {playerName   } 
        <span className="player-symbol">{props.symbol}</span>
        </span>
        <button onClick={handleButton}>{isEditing ? "Save" : "Edit"}</button>
       </li>
    )
}
//now we have to manage some states because we have to show edit button when user want to edit but once the user add sometinh in the input field than we have to show save button I mean conditional rendering 
// I mean the state which can change the UI once something is triggereed 

// to show the different way to render conditionally I Implement the logic in both way 

// You can use USestate more than once in any component 