import { useState } from "react";
import Display from './MarksheetDisplay';
export default function MarksheetNew(){



   
    var [name,setName] = useState("");
    var [eng,setEng] = useState(0);
    var [urdu,setUrdu] = useState(0);
    var [math,setMath] = useState(0);
    var [total,setTotal] = useState(0);
    var [per,setPer] = useState(0);

    function Completeg(z)
    {
        z.preventDefault();
        

   var totalMarks = 300;
   var finalTotal = parseFloat(eng) + parseFloat(urdu) + parseFloat(math);
   var result = finalTotal / totalMarks * 100;
   var show = Math.round(result);

   console.log(finalTotal);
   console.log(show);
   
   setTotal(finalTotal);
   setPer(show);


   

   };


   


   return(
       <>
       <h1 className="text-center">Marksheet</h1>

       <div className="container">
       <div className="row mx-auto align-items-center justify-content-center">
           <div className="col-12 ">
           <form action="" method="" onSubmit={Completeg}>

                <p>Name</p>
                <input type="text" className="form-control" value={name} onChange={(a)=>{setName(a.target.value)}} />
                <br/>
                <p>Eng</p>
                <input type="number" className="form-control" value={eng} onChange={(a)=>{setEng(a.target.value)}} />
                <br/>
                <p>Urdu</p>
                <input type="number" className="form-control" value={urdu} onChange={(a)=>{setUrdu(a.target.value)}} />
<br/>
                <p>Math</p>
                <input type="number" className="form-control" value={math} onChange={(a)=>{setMath(a.target.value)}}  />
                <br/>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
            <br/>
            <Display a={name} b={eng} c={urdu} d={math} e={total} f={per} />
           </div>
       </div>
       </div>

       

      
       </>
   );
}

