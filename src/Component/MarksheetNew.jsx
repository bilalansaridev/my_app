import { useState } from "react";
import Display from './MarksheetDisplay';
export default function MarksheetNew() {




    var [name, setName] = useState("");
    var [eng, setEng] = useState(0);
    var [urdu, setUrdu] = useState(0);
    var [math, setMath] = useState(0);
    var [total, setTotal] = useState(0);
    var [per, setPer] = useState(0);

    var [engerr, setEngerr] = useState("");
    var [urduerr, setUrduerr] = useState("");
    var [matherr, setMatherr] = useState("");


    function Completeg(z) {

        z.preventDefault();
        var totalMarks = 300;
        var finalTotal = parseFloat(eng) + parseFloat(urdu) + parseFloat(math);
        var result = finalTotal / totalMarks * 100;
        var show = Math.round(result);
        setTotal(finalTotal);
        setPer(show);





        if (eng > 100 || eng < 1) {
            setEngerr("Max 100");
            if (eng < 0) {
                setEngerr("Min 1");
            }
        }
        else {
            setEngerr("");
        }

        if (urdu > 100 || eng < 1) {
            setUrduerr("Max 100");
            if (urdu < 0) {
                setUrduerr("Min 1");
            }
        }
        else {
            setUrduerr("");
        }

        if (math > 100 || eng < 1) {
            setMatherr("Max 100");
            if (math < 0) {
                setMatherr("Min 1");
            }
        }
        else {
            setMatherr("");
        }



    };

    function boxColor(subject) {
        return (subject > 100 || subject < 0) ? { borderColor: "red",borderWidth:"4px"  } : {}
    }






    return (
        <>
            <h1 className="text-center">Marksheet</h1>

            <div className="container">
                <div className="row mx-auto align-items-center justify-content-center">
                    <div className="col-12 ">
                        <form action="" method="" onSubmit={Completeg}>

                            <p>Name</p>
                            <input type="text" className="form-control" value={name} onChange={(a) => { setName(a.target.value) }} />
                            <br />
                            <p>Eng</p>
                            <span className="text-danger">{engerr}</span>
                            <input type="number" className="form-control" value={eng} onChange={(a) => { setEng(a.target.value) }} style={boxColor(eng)} />
                            <br />
                            <p>Urdu</p>
                            <span className="text-danger">{urduerr}</span>
                            <input type="number" className="form-control" value={urdu} onChange={(a) => { setUrdu(a.target.value) }} style={boxColor(urdu)} />
                            <br />
                            <p>Math</p>
                            <span className="text-danger">{matherr}</span>
                            <input type="number" className="form-control" value={math} onChange={(a) => { setMath(a.target.value) }} style={boxColor(math)} />
                            <br />
                            <input className="btn btn-primary" type="submit" value="Submit" disabled={eng > 100 || eng < 0 || urdu > 100 || urdu < 0 || math > 100 || math < 0} />
                        </form>
                        <br />
                        {(eng > 100 || eng < 0 || urdu > 100 || urdu < 0 || math > 100 || math < 0) &&
                           <div className="alert alert-danger alert-dismissible fade show" role="alert">
                           <strong>Invalid Marks!</strong> You should check in on some of those fields below.
                           <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                         </div>
                        }

                        {!(eng > 100 || eng < 0 || urdu > 100 || urdu < 0 || math > 100 || math < 0) &&
                            
                        <Display a={name} b={eng} c={urdu} d={math} e={total} f={per} />
                        }

                    </div>
                </div>
            </div>




        </>
    );
}

