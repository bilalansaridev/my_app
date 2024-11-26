import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

export default function ButtonUsage() {

    var [username, setUserName] = useState("");
    var [age, setAge] = useState();

    function formSubmitkrdo(e){
        e.preventDefault();

        alert(username);
        alert(age);
    }



    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">

                        

                        <form action="" method="post" onSubmit={formSubmitkrdo}>

                            <TextField
                                id=""
                                label="User Name"
                                variant='outlined'
                                value={username}
                                onChange={(e) => { setUserName(e.target.value) }}

                            />
                            <br /> <br />

                            <TextField
                                id=""
                                label="Age"
                                variant='outlined'
                                value={age}
                                onChange={(e) => { setAge(e.target.value) }}

                            />

                            <br /><br />



                            <Button variant="contained" size='large' type='submit' >Submit</Button>



                        </form>

                    </div>
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">
                        <Button variant="contained" size='large' onClick={(a) => { alert("Monday"); }} color="primary" sx={{ mx: 2 }}>Monday</Button>
                        <Button variant="contained" size='large' onClick={(a) => { alert("Tuesday"); }} color="secondary" sx={{ mx: 2 }}>Tuesday</Button>
                        <Button variant="contained" size='large' onClick={(a) => { alert("Wednesday"); }} color="info" sx={{ mx: 2 }}>Wednesday</Button>
                        <Button variant="contained" size='large' onClick={(a) => { alert("Thursday"); }} color="success" sx={{ mx: 2 }}>Thursday</Button>
                        <Button variant="contained" size='large' onClick={(a) => { alert("Friday"); }} color="warning" sx={{ mx: 2 }}>Friday</Button>
                        <Button variant="contained" size='large' onClick={(a) => { alert("Saturday"); }} color="error" sx={{ mx: 2 }}>Saturday</Button>
                        <Button variant="contained" size='large' onClick={(a) => { alert("Sunday"); }} color="inherit" sx={{ mx: 2 }}>Sunday</Button>

                    </div>
                </div>
            </div>

        </>

    );
}
