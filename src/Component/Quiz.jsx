import { useState } from "react";
export default function Quiz() {

    // Radio Button ki States
    var [question1, setQuestion1] = useState("");
    var [question2, setQuestion2] = useState("");
    var [question3, setQuestion3] = useState("");
    var [question4, setQuestion4] = useState("");
    var [question5, setQuestion5] = useState("");
    // Marks
    var [score, setScore] = useState(0);
    var [rightAns, setrightAns] = useState(0);
    var [wrongAns, setwrongAns] = useState(0);


    // Ghalat Question ki Styling
    var [Sque1, setSQue1] = useState({});
    var [Sque2, setSQue2] = useState({});
    var [Sque3, setSQue3] = useState({});
    var [Sque4, setSQue4] = useState({});
    var [Sque5, setSQue5] = useState({});


    const onChangeFunction = (State) => (a) => {
        return State(a.target.value);
    }

    function Quiz_logic(e) {
        e.preventDefault();
      
        if (question1 === "d") {
            score += 5;
            rightAns ++;
        }else {
            wrongAns ++;
            setSQue1({ color: "red" });
        } 

        if (question2 === "a") {
            score += 5;
            rightAns ++;
        } else {
            wrongAns ++;
            setSQue2({ color: "red" });

        }

        if (question3 === "b") {
            score += 5;
            rightAns ++;
        } else {
            wrongAns ++;
            setSQue3({ color: "red" });

        }

        if (question4 === "a") {
            score += 5;
            rightAns ++;
        } else {
            wrongAns ++;
            setSQue4({ color: "red" });

        }

        if (question5 === "b") {
            score += 5;
            rightAns ++;
        } else {
            wrongAns ++;
            setSQue5({ color: "red" });

        }

        setScore(score);
        setrightAns(rightAns);
        setwrongAns(wrongAns);
   

    }
    

    var progreebar = (score * 100) / 25;
    var progess_bar_style = progreebar === 100 ? "progress-bar progress-bar-striped bg-success" :
        progreebar === 80 ? "progress-bar progress-bar-striped bg-warning" :
            progreebar === 60 ? "progress-bar progress-bar-striped bg-secondary" :
                progreebar === 40 ? "progress-bar progress-bar-striped bg-dark" : "progress-bar progress-bar-striped bg-danger";




    function Count_of_Attempted_Questions() {
        return [question1, question2, question3, question4, question5].filter((x) => x != "").length
    }

    var Attempted_question_progress_bar = (Count_of_Attempted_Questions() * 100) / 5;
    console.log(Attempted_question_progress_bar)



    return (
        <>
            <div class="container mt-5">
                <div class="row justify-content-center mx-auto align-items-center">
                    <h2 class="text-center  mb-4">Quiz</h2>
                    <div className="col-12 ">
                        <form id="quizForm" onSubmit={Quiz_logic}>

                            <div class="form-group mb-4">
                                <h5 style={Sque1}>1. Who was the founder of Pakistan?</h5>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question1" id="q1a" value="a" onChange={onChangeFunction(setQuestion1)} checked={question1 === "a"} />
                                    <label class="form-check-label" for="q1a">A. Allama Iqbal</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question1" id="q1b" value="b" onChange={onChangeFunction(setQuestion1)} checked={question1 === "b"} />
                                    <label class="form-check-label" for="q1b">B. Liaquat Ali Khan</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question1" id="q1c" value="c" onChange={onChangeFunction(setQuestion1)} checked={question1 === "c"} />
                                    <label class="form-check-label" for="q1c">C. Zulfikar Ali Bhutto</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question1" id="q1d" value="d" onChange={onChangeFunction(setQuestion1)} checked={question1 === "d"} />
                                    <label class="form-check-label" for="q1d">D. Muhammad Ali Jinnah</label>
                                </div>
                            </div>


                            <div class=" form-groupmb-4">
                                <h5 style={Sque2}>2. What is the national language of Pakistan?</h5>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question2" id="q2a" value="a" onChange={onChangeFunction(setQuestion2)} checked={question2 === "a"} />
                                    <label class="form-check-label" for="q2a">A. Urdu</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question2" id="q2b" value="b" onChange={onChangeFunction(setQuestion2)} checked={question2 === "b"} />
                                    <label class="form-check-label" for="q2b">B. Panjabi</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question2" id="q2c" value="c" onChange={onChangeFunction(setQuestion2)} checked={question2 === "c"} />
                                    <label class="form-check-label" for="q2c">C. English</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question2" id="q2d" value="d" onChange={onChangeFunction(setQuestion2)} checked={question2 === "d"} />
                                    <label class="form-check-label" for="q2d">D. Pashto</label>
                                </div>
                            </div>


                            <div class="form-group mb-4">
                                <h5 style={Sque3}>3. Which river is considered the lifeline of Pakistan?</h5>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question3" id="q3a" value="a" onChange={onChangeFunction(setQuestion3)} checked={question3 === "a"} />
                                    <label class="form-check-label" for="q3a">A. Nile</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question3" id="q3b" value="b" onChange={onChangeFunction(setQuestion3)} checked={question3 === "b"} />
                                    <label class="form-check-label" for="q3b">B. Indus</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question3" id="q3c" value="c" onChange={onChangeFunction(setQuestion3)} checked={question3 === "c"} />
                                    <label class="form-check-label" for="q3c">C. Ganges</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question3" id="q3d" value="d" onChange={onChangeFunction(setQuestion3)} checked={question3 === "d"} />
                                    <label class="form-check-label" for="q3d">D. Amazon</label>
                                </div>
                            </div>


                            <div class="form-group mb-4">
                                <h5 style={Sque4}>4. What is the highest peak in Pakistan?</h5>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question4" id="q4a" value="a" onChange={onChangeFunction(setQuestion4)} checked={question4 === "a"} />
                                    <label class="form-check-label" for="q4a">A. K2</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question4" id="q4b" value="b" onChange={onChangeFunction(setQuestion4)} checked={question4 === "b"} />
                                    <label class="form-check-label" for="q4b">B. Nanga Parbat</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question4" id="q4c" value="c" onChange={onChangeFunction(setQuestion4)} checked={question4 === "c"} />
                                    <label class="form-check-label" for="q4c">C. Mount Everest</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question4" id="q4d" value="d" onChange={onChangeFunction(setQuestion4)} checked={question4 === "d"} />
                                    <label class="form-check-label" for="q4d">D. Kangchenjunga</label>
                                </div>
                            </div>


                            <div class="form-group mb-4">
                                <h5 style={Sque5}>5. In which year did Pakistan gain independence?</h5>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question5" id="q5a" value="a" onChange={onChangeFunction(setQuestion5)} checked={question5 === "a"} />
                                    <label class="form-check-label" for="q5a">A. 1940</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question5" id="q5b" value="b" onChange={onChangeFunction(setQuestion5)} checked={question5 === "b"} />
                                    <label class="form-check-label" for="q5b">B. 1947</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question5" id="q5c" value="c" onChange={onChangeFunction(setQuestion5)} checked={question5 === "c"} />
                                    <label class="form-check-label" for="q5c">C. 1952</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="question5" id="q5d" value="d" onChange={onChangeFunction(setQuestion5)} checked={question5 === "d"} />
                                    <label class="form-check-label" for="q5d">D. 1965</label>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary text-center">Submit</button>

                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Score</th>
                                        <th>Right Answers</th>
                                        <th>Wrong Answers</th>
                                        <th>Per %</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{score}</td>
                                        <td>{rightAns}</td>
                                        <td>{rightAns}</td>
                                        <td>{progreebar} %</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow={progreebar} aria-valuemin="0" aria-valuemax="100">
                                <div className={progess_bar_style} style={{ width: `${progreebar}%` }}>{progreebar} %</div>
                            </div>
                        </form>
                        <h3 className="text-center">Questions Attempted</h3>
                        <div class="my-3 progress" role="progressbar" aria-label="Default striped example" aria-valuenow={Attempted_question_progress_bar} aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped" style={{ width: `${Attempted_question_progress_bar}%` }}>{Attempted_question_progress_bar}%</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}