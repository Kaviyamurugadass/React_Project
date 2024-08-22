import { useState } from "react";
export default function Player({name,symbol,isActive,onChangeName}){
    const[isName,setName]= useState(name);
    const[isEdit,setEdit]= useState(false);
    console.log(isEdit)

    function handleEdit(){
        setEdit((edit)=>!edit);
        if(isEdit){
            onChangeName(symbol, isName);
        }
    }
    function handleChange(event){
        console.log(event.target.value);
        setName(event.target.value);
    }
   let EditName =  (isEdit)?  <input type="text" required value={isName} onChange={handleChange}></input>:<span className="player-name">{isName}</span>
    
    return(
       <li className={isActive ? 'active':undefined}>
        <span className="player">

        {EditName}
      
       <span className="player-symbol">{symbol}</span>
       </span>
       <button onClick={handleEdit} >{(isEdit)? 'Saveit':'Editit'}</button>  
       </li>
    );
}




