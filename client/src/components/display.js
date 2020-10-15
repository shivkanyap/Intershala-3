import React ,{useState} from 'react'
import { useSelector } from 'react-redux';
import '../App.css'
const Display=()=>{

    
    const form = useSelector(state => state.user.form);
console.log(form,' in form')
    return(
        <div className="display">
           <h5>Name :{form.name}</h5>
           <h5>Email :{form.email}</h5>
           <h5>Mobile :{form.mobile}</h5>
           <h5>Suggestion :{form.suggestion}</h5>
           <h5>Rating :{form.rating}</h5> 
           <h5>Recommanded :{form.recommandation}</h5>
           {/* <h5>Cusines {form.cusinies} */}
             {/* </h5>  */}

        </div>
       
    )    

}
export default Display