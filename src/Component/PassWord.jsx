import { useState } from "react";
export default function PassWord() {
    var [pass, setPass] = useState("");
    var [passError, setpassError] = useState("");
    var [matherr, setMatherr] = useState("");


    function Completeg(z) {

        z.preventDefault();
    





        if (pass > 100 || pass < 1) {
            setpassError("Max 100");
            if (pass < 0) {
                setpassError("Min 1");
            }
        }
        else {
            setpassError("");
        }





    };

        return(
            <>
                <h1 className="text-center">Password</h1>
                <div className="container">
                <div className="row mx-auto align-items-center justify-content-center">
                    <div className="col-12 ">
                        <form action="" method="" onSubmit={Completeg}>

                            <p>Password</p>
                            <span className="text-danger">{passError}</span>
                            <input type="password" className="form-control" value={pass} onChange={(a) => { setPass(a.target.value) }} />
                            <br />
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </form>
                
                    </div>
                </div>
            </div>
            </>
        );
    }