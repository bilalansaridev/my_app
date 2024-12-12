import { useState } from "react";

export default function ToDolistNew() {

    // Radio Button ki States
    var [Radio_ki_value, setRadio_ki_value] = useState({});

    
    // Marks
    var [score, setScore] = useState(0);
    var [rightAns, setrightAns] = useState(0);
    var [wrongAns, setwrongAns] = useState(0);

    var Question_Array = [
        {
            question: "Who's the Founder of Pakistan ?",
            options: ["Shahrukh Khan", "Peshawar Khan", "Quaid e Azam", "Gandhi"],
            correct: "Quaid e Azam",
            no: 1
        },
        {
            question: "What is the largest planet in our solar system ?",
            options: ["Earth", "Jupiter", "Mars", "Saturn"],
            correct: "Jupiter",
            no: 2
        },
        {
            question: "Which element has the chemical symbol 'O' ?",
            options: ["Oxygen", "Gold", "Osmium", "Ozone"],
            correct: "Oxygen",
            no: 3
        },
        {
            question: "Who wrote the play 'Romeo and Juliet' ?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            correct: "William Shakespeare",
            no: 4
        }

    ]



    // // Ghalat Question ki Styling
    // var [Sque1, setSQue1] = useState({});
    // var [Sque2, setSQue2] = useState({});
    // var [Sque3, setSQue3] = useState({});
    // var [Sque4, setSQue4] = useState({});
    // var [Sque5, setSQue5] = useState({});


    function Value_Get_Radio(ques ,va) {
        setRadio_ki_value((a)=>({
            ...a,
            [ques]:va
        }))
    }

    function Quiz_app(e) {
        e.preventDefault();

        Question_Array.map((a)=>{
            if(Radio_ki_value[a.no] === a.correct){
                score += 5;
                rightAns++;
            }
         else {
            wrongAns++;
            // setSQue5({ color: "red" });

        }
        })

        setScore(score);
        setrightAns(rightAns);
        setwrongAns(wrongAns);
        console.log(Radio_ki_value);

    }


  

    // function Quiz_logic(e) {
    //     e.preventDefault();

       

    //     if (question5 === "b") {
    //         score += 5;
    //         rightAns++;
    //     } else {
    //         wrongAns++;
    //         setSQue5({ color: "red" });

    //     }

    //     setScore(score);
    //     setrightAns(rightAns);
    //     setwrongAns(wrongAns);


    // }


    // var progreebar = (score * 100) / 25;
    // var progess_bar_style = progreebar === 100 ? "progress-bar progress-bar-striped bg-success" :
    //     progreebar === 80 ? "progress-bar progress-bar-striped bg-warning" :
    //         progreebar === 60 ? "progress-bar progress-bar-striped bg-secondary" :
    //             progreebar === 40 ? "progress-bar progress-bar-striped bg-dark" : "progress-bar progress-bar-striped bg-danger";




    // function Count_of_Attempted_Questions() {
    //     return [Question_Array.map((a)=>(Radio_ki_value[a.no] ))].filter((x) => x != "").length
    // }

    // var Attempted_question_progress_bar = (Count_of_Attempted_Questions() * 100) / 5;
    // console.log(Attempted_question_progress_bar)



    return (
        <>
            <div class="container mt-5">
                <div class="row justify-content-center mx-auto align-items-center">
                    <h1 class="text-center display-1 mb-4">Quiz</h1>
                    <div className="col-12 ">
                        <form id="quizForm" onSubmit={Quiz_app}>

                            {Question_Array.map((ques) => (

                                <div class="form-group mb-4">
                                    <h5 className="display-5" >{ques.no}. {ques.question}</h5>
                                    {ques.options.map((o,i)=>(
                                        <div class="form-check">
                                        <input class="form-check-input" type="radio" name={`q${ques.no}`} id={`q${ques.no}-${i}`} value={o} onChange={(e)=>{Value_Get_Radio(ques.no,o)}} checked={Radio_ki_value[ques.no] === o} />
                                        <label class="form-check-label" for={`q${ques.no}-${i}`} >{o}</label>
                                    </div>
                                    ))}
                                </div>

                            ))}

                    

                            <button type="submit" class="btn btn-primary text-center">Submit</button>

                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Score</th>
                                        <th>Right Answers</th>
                                        <th>Wrong Answers</th>
                                        {/* <th>Per %</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{score}</td>
                                        <td>{rightAns}</td>
                                        <td>{wrongAns}</td>
                                        {/* <td>{progreebar} %</td> */}
                                    </tr>
                                </tbody>
                            </table>

                            {/* <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow={progreebar} aria-valuemin="0" aria-valuemax="100">
                                <div className={progess_bar_style} style={{ width: `${progreebar}%` }}>{progreebar} %</div>
                        </div>*/}
                        </form>
                        {/*
                        <h3 className="text-center">Questions Attempted</h3>
                        <div class="my-3 progress" role="progressbar" aria-label="Default striped example" aria-valuenow={Attempted_question_progress_bar} aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-striped" style={{ width: `${Attempted_question_progress_bar}%` }}>{Attempted_question_progress_bar}%</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}