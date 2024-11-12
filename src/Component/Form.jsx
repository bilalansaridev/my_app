import { useState } from "react";
import Display from './TableDisplay';
export default function Form(){

    var [name,setName] = useState("");
    var [email,setEmail] = useState("");
    var [phone,setPhone] = useState("");

    function Completeg(z)
    {
        z.preventDefault();
        console.log(name);
        console.log(email);
        console.log(phone);
    }

    return(
    
        <div className="container">
            <form action="" method="" onSubmit={Completeg}>

                <p>Name</p>
                <input type="text" className="form-control" value={name} onChange={(a)=>{setName(a.target.value)}} />
                <br/>
                <p>Email</p>
                <input type="email" className="form-control" value={email} onChange={(a)=>{setEmail(a.target.value)}} />
<br/>
                <p>Phone</p>
                <input type="text" className="form-control" value={phone} onChange={(a)=>{setPhone(a.target.value)}}  />
                <br/>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
            <br/>
            <Display a={name} b={email} c={phone} />


        </div>
        
        
    );
}