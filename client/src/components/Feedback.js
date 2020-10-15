import React,{useState} from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions/formaction'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const options = [
{ value: 'punjabi', label: 'punjabi' },
{ value: 'north', label: 'north' },
{ value: 'south', label: 'south' },
{ value: 'mughali', label: 'mughali' },
{ value: 'rajasthani', label: 'rajasthani' }
];

const Feedback =(props)=>{

const [name,setName]=useState('');
const [email,setEmail]=useState('')
const [mobile,setMobile]=useState('')
const [date,setDate]=useState(new Date())
const [rating,setRating]=useState()
const [suggestion,setSuggestion]=useState('')
const [cusinies,setCusine]=useState([])
const [recommandation,setRecom]=useState('')
const [errors,setError] =useState(false)

const handleSubmit=(e)=>{
console.log('u clicked')
e.preventDefault()
const formData={
name:name,
email:email,
mobile:mobile,
rating:rating,
cusinies:cusinies,
suggestion:suggestion,
recommandation: recommandation


}
console.log(formData)
props.fetchUser(formData)
props.history.push('/submit')

}
const errMessage=()=>{
    if( 
        name===""&&
        mobile===""&&
        email===""&&
        rating===""&&
        cusinies===""&&
        suggestion===""&&
        recommandation===""


    ){
            setError(true)
    }
}
const notify = () => {
    toast.success("Request Sent Successfully", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
    setError(false)
   
    
  };

return(
<div className="formdata">
<ToastContainer />
<form onSubmit={handleSubmit}>
{errors?(<div  style={{color:'red' ,textAlign:'center'}}>  All fields are required</div>):null}
<h3>FeedBack from Customer</h3>
<div className="form-group col-4">
<label>Name</label>
<input type="text" className="form-control" name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="enter your name"/>
</div>
<div className="form-group col-4">
<label>Phone</label>
<input type="number" className="form-control" name="mobile" onChange={e=>setMobile(e.target.value)} value={mobile} placeholder="Enter mobile number"/>
</div>

<div className="form-group col-4">
<label >Email address</label>
<input type="email" className="form-control" size="sm" name="email" onChange={e=>setEmail(e.target.value)} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
</div>

<div className="form-group col-4">
<label className="control-label col-4 " >Date</label>
<DatePicker selected={date} onChange={e=>setDate(e)}/>
{/* <input type="date" className="form-control" id="date" name="date" onChange={e=>setDate(e.target.value)} value={date} placeholder="MM/DD/YYY" type="text"/>  */}
</div>
<div className="form-group col-4">
<label >Ratings</label>
<select multiple className="form-control" name="rating" onChange={e=>setRating(e.target.value)} value={rating} id="exampleFormControlSelect2">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select>
</div>
<div className="form-group col-4">
<label >Suggestions</label>
<textarea className="form-control" name="suggestion" onChange={e=>setSuggestion(e.target.value)} value={suggestion} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<h4>Cuisine Preference</h4>
<div className="form-group col-4">
<Select value={cusinies}
onChange={(cusinies)=>setCusine(cusinies)}
options={options}
closeMenuOnSelect={false}
hideSelectedOptions={false}
isMulti
/>
</div>


<h4>Friend Recommadation</h4>
<div className="form-check col-4">

<input className="form-check-input" type="radio" name=" recommandation" id="yes"value="yes" onChange={e=>setRecom(e.target.value)}/>
<label className="form-check-label" >
yes
</label>
</div>
<div className="form-check col-4">

<input className="form-check-input" type="radio" name=" recommandation" id="exampleRadios2" value="no" onChange={e=>setRecom(e.target.value)}/>
<label className="form-check-label" >
No
</label>
</div>
<div className="form-check col-4">

<input className="form-check-input" type="radio" name=" recommandation" id="exampleRadios2" value="maybe" onChange={e=>setRecom(e.target.value)}/>
<label className="form-check-label">
May Be
</label>
</div>
<br/>

<button type="submit" className="btn btn-primary"
onClick={
    name!==""&&
    mobile!==""&&
    email!==""&&
    rating!==""&&
    suggestion!==""&&
    cusinies!==""
    ?  notify
    : errMessage

}>Submit</button>
</form>
</div>
)
}

const mapStatetoProps=state=>({
user:state.user.form
})
export default connect(mapStatetoProps,{fetchUser})(Feedback)

