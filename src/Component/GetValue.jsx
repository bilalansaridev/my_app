import { useState } from "react";
export default function GetValue() {

    var [Gender, setGender] = useState("");
    var [Error, setError] = useState("");

    function Complete(z) {
        z.preventDefault();
        console.log(Gender);

    };

    function ChangeGender(event) {
        setGender(event.target.value);
        setError("");
    }



    return (
        <>
            <h1 className="text-center">Password</h1>
            <div className="container">
                <div className="row mx-auto align-items-center justify-content-center">
                    <div className="col-12 ">
                        <form action="" method="" onSubmit={Complete}>

                           
                            <span className="text-danger">{Error}</span>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="gender1" value="Male" onChange={ChangeGender} checked={Gender === "Male"}/>
                                    <label class="form-check-label" for="gender1">
                                        Male
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="gender1" value="Female" onChange={ChangeGender} checked={Gender === "Female"}/>
                                    <label class="form-check-label" for="gender1">
                                        Female
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="gender1" value="Other" onChange={ChangeGender} checked={Gender === "Other"}/>
                                    <label class="form-check-label" for="gender1">
                                        Other
                                    </label>
                            </div>
                        
                            <input className="btn btn-primary mt-4" type="submit" value="Submit" />
                        </form>

                    </div>
                </div>
            </div>
        </>
    );

}