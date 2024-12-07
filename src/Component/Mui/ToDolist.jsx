import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { PlusOne } from '@mui/icons-material';
import { unstable_useEnhancedEffect } from '@mui/material';


export default function ToDolist() {

    var [inputtext, setInputtext] = useState("");
    var [tasklist, setTasklist] = useState([]);

    function addTask() {

        if (inputtext.trim() !== "") {
            if (tasklist.includes(inputtext.trim())) {
                alert("Task already exists");
            }
            else {
                setTasklist([...tasklist, inputtext]);
                setInputtext("");
            }

        }

    }

    
    function removeTask(index) {
        if(window.confirm("Are you Sure !")){
        setTasklist(tasklist.filter((_, i) => i !== index));
        }
    }
 



    return (
        <>
            <div className='container'>
                <div className="row col-md-12 d-flex justify-content-center align-items-center">
                    <h2 className='text-center display-1 fw-bold'>ToDo List</h2>
                    <div className="col-md-12 d-flex justify-content-center align-items-center">




                        <TextField

                            label="Task"
                            variant='outlined'
                            placeholder=''
                            value={inputtext}
                            onChange={(e) => { setInputtext(e.target.value) }}

                        />




                        <Button variant="contained" size='large' color="warning" sx={{ mx: 2 }} onClick={addTask}> +</Button>





                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">

                        {tasklist.length == 0 ? (
                            <p>Click on <b>(+)</b> to Add Task</p>
                        ) : (
                            <ul className="list-group">
                                {tasklist.map((a, i) => (
                                    <li className="list-group-item me-auto" key={i}>{a} &nbsp; <Button variant="contained" size='large' onClick={() => removeTask(i)} color="error" sx={{ mx: 2 }}>x</Button></li>
                                ))}
                            </ul>
                        )}


                    </div>
                </div>
            </div>

        </>

    );
}
