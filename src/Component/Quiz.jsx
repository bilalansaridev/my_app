import { useState } from "react";

export default function Quiz() {
    var [Q1, setQ1] = useState("");
    var [Q2, setQ2] = useState("");
    var [Q3, setQ3] = useState("");
    var [A1, setA1] = useState("");
    var [A2, setA2] = useState("");
    var [A3, setA3] = useState("");
    var [A, setA] = useState(0);



    function Complete(event) {
        event.preventDefault();
        Result();
        console.log(Q1);
        console.log(Q2);
        console.log(Q3);
    }

    function ChangeQ1(event) {
        setQ1(event.target.value);

    }
    function ChangeQ2(event) {
        setQ2(event.target.value);

    }
    function ChangeQ3(event) {
        setQ3(event.target.value);

    }

    function Result() {


        if (Q1 === "Muhammad Ali Jinnah") {
            setA1("Correct");
        } else {
            setA1("Incorrect");
        }

        if (Q2 === "Urdu") {
            setA2("Correct");
        } else {
            setA2("Incorrect");
        }
        if (Q3 === "Indus") {
            setA3("Correct");
        } else {
            setA3("Incorrect");
        }


    }



    return (
        <>
            <h1 className="text-center">Quiz</h1>

            <div className="container">
                <div className="row mx-auto align-items-center justify-content-center">
                    <div className="col-12 ">
                        <form action="" method="" onSubmit={Complete}>
                            <div className="form-group">
                                <p>Who was the founder of Pakistan?</p> <span className={(A1 === "Correct") ? "text-success" : "text-danger"}>{A1}</span>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q1" id="Allama Iqbal" value="Allama Iqbal" onChange={ChangeQ1} checked={Q1 === "Allama Iqbal"} />
                                    <label className="form-check-label" htmlFor="Allama Iqbal">
                                        Allama Iqbal
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q1" id="Liaquat Ali Khan" value="Liaquat Ali Khan" onChange={ChangeQ1} checked={Q1 === "Liaquat Ali Khan"} />
                                    <label className="form-check-label" htmlFor="Liaquat Ali Khan">
                                        Liaquat Ali Khan
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q1" id="Zulfikar Ali Bhutto" value="Zulfikar Ali Bhutto" onChange={ChangeQ1} checked={Q1 === "Zulfikar Ali Bhutto"} />
                                    <label className="form-check-label" htmlFor="Zulfikar Ali Bhutto">
                                        Zulfikar Ali Bhutto
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q1" id="Muhammad Ali Jinnah" value="Muhammad Ali Jinnah" onChange={ChangeQ1} checked={Q1 === "Muhammad Ali Jinnah"} />
                                    <label className="form-check-label" htmlFor="Muhammad Ali Jinnah">
                                        Muhammad Ali Jinnah
                                    </label>
                                </div>
                            </div>
                            <div className="form-group ">
                                <p>What is the national language of Pakistan?</p> <span className={(A2 === "Correct") ? "text-success" : "text-danger"}>{A2}</span>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q2" id="Urdu" value="Urdu" onChange={ChangeQ2} checked={Q2 === "Urdu"} />
                                    <label className="form-check-label" htmlFor="Urdu">
                                        Urdu
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q2" id="Punjabi" value="Punjabi" onChange={ChangeQ2} checked={Q2 === "Punjabi"} />
                                    <label className="form-check-label" htmlFor="Punjabi">
                                        Punjabi
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q2" id="English" value="English" onChange={ChangeQ2} checked={Q2 === "English"} />
                                    <label className="form-check-label" htmlFor="English">
                                        English
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q2" id="Pashto" value="Pashto" onChange={ChangeQ2} checked={Q2 === "Pashto"} />
                                    <label className="form-check-label" htmlFor="Pashto">
                                        Pashto
                                    </label>
                                </div>
                            </div>
                            <div className="form-group ">
                                <p>Which river is considered the lifeline of Pakistan?</p> <span className={(A3 === "Correct") ? "text-success" : "text-danger"}>{A3}</span>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q3" id="Nile" value="Nile" onChange={ChangeQ3} checked={Q3 === "Nile"} />
                                    <label className="form-check-label" htmlFor="Nile">
                                        Nile
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q3" id="Indus" value="Indus" onChange={ChangeQ3} checked={Q3 === "Indus"} />
                                    <label className="form-check-label" htmlFor="Indus">
                                        Indus
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q3" id="Ganges" value="Ganges" onChange={ChangeQ3} checked={Q3 === "Ganges"} />
                                    <label className="form-check-label" htmlFor="Ganges">
                                        Ganges
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="q3" id="Amazon" value="Amazon" onChange={ChangeQ3} checked={Q3 === "Amazon"} />
                                    <label className="form-check-label" htmlFor="Amazon">
                                        Amazon
                                    </label>
                                </div>
                            </div>

                            <input className="btn btn-primary mt-4" type="submit" value="Submit" />
                        </form>
                    </div>
                     {(MaritalStatus === "") &&
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong> Incorrect !</strong> Please select your marital status.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    }

                    {!(MaritalStatus === "") &&
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong> Ans</strong> .
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    }  

                </div>
            </div>
        </>
    );
}