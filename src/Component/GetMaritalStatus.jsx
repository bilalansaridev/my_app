import { useState } from "react";

export default function GetMaritalStatus() {
    var [MaritalStatus, setMaritalStatus] = useState("");


    function Complete(event) {
        event.preventDefault();
        console.log(MaritalStatus);
    }

    function ChangeMaritalStatus(event) {
        setMaritalStatus(event.target.value);

    }

    return (
        <>
            <h1 className="text-center">Marital Status</h1>
            
            <div className="container">
                <div className="row mx-auto align-items-center justify-content-center">
                    <div className="col-12 ">
                        <form action="" method="" onSubmit={Complete}>
                            <div className="form-group d-flex jusitfy-content-center align-items-center">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="maritalStatus" id="single" value="Single" onChange={ChangeMaritalStatus} checked={MaritalStatus === "Single"} />
                                <label className="form-check-label" htmlFor="single">
                                    Single
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="maritalStatus" id="married" value="Married" onChange={ChangeMaritalStatus} checked={MaritalStatus === "Married"} />
                                <label className="form-check-label" htmlFor="married">
                                    Married
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="maritalStatus" id="divorced" value="Divorced" onChange={ChangeMaritalStatus} checked={MaritalStatus === "Divorced"} />
                                <label className="form-check-label" htmlFor="divorced">
                                    Divorced
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="maritalStatus" id="widowed" value="Widowed" onChange={ChangeMaritalStatus} checked={MaritalStatus === "Widowed"} />
                                <label className="form-check-label" htmlFor="widowed">
                                    Widowed
                                </label>
                            </div>
                            </div>

                            <input className="btn btn-primary mt-4" type="submit" value="Submit" />
                        </form>
                    </div>
                    {(MaritalStatus === "") &&
                           <div className="alert alert-danger alert-dismissible fade show" role="alert">
                           <strong> Hi !</strong> Please select your marital status.
                           <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                         </div>
                        }

                        {!(MaritalStatus === "") &&
                           <div className="alert alert-success alert-dismissible fade show" role="alert">
                           <strong> You are !</strong> {MaritalStatus}.
                           <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                         </div>
                        }

                </div>
            </div>
        </>
    );
}