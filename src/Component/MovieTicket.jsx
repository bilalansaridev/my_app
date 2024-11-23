import { useState } from "react";
export default function MovieTicket() {

    var [User, setUser] = useState("");
    var [Movie, setMovie] = useState("");
    var [Glasses, setGlasses] = useState("");
    var [Type, setType] = useState("");
    var [Quantity, setQuantity] = useState(0);
    var [Total, setTotal] = useState(0);


    function Complete(z) {
        z.preventDefault();
        if(Type === "silver" )
            {
                var price = 700;
            }else if(Type === "gold")
                {
                    var price = 900;
                }else if(Type === "platinium")
                    {
                        var price = 1200;
                    }
                    else
                    {
                        price = 0;
                    }
                    
                    if(Quantity > 0 )
                        {
                            var total = price * Quantity;
                            setTotal(total);
                        }
                        else
                        {
                            setTotal(total);
                        }

                        if(Glasses === "yes")
                            {
                                var glassesprice = 400;
                                var total = total + glassesprice;
                                setTotal(total);
                            }
                            else
                            {
                                var total = total;
                                setTotal(total);
                            }


    };

    function ChangeGlasses(event) {
        setGlasses(event.target.value);
        
    }





   
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">Movie Ticket Booking System</h1>
                        <form onSubmit={Complete} method="post">
                        <div className="mb-4">
                            <h4></h4>
                            <div className="form-group">
                                <div className="form-check">
                                <label className="form-label" htmlFor="username">
                                        User Name
                                    </label>
                                    <input className="form-control" type="text" name="username" id="username" value={User} onChange={(a) => {setUser(a.target.value)}} />  
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h4></h4>
                            <div className="form-group">
                                <div className="form-check">
                                <label className="form-label" htmlFor="moviename">
                                        Movie Name
                                    </label>
                                    <input className="form-control" type="text" name="moviename" id="moviename" value={Movie} onChange={(a) => {setMovie(a.target.value)}} />  
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h4>Movie Ticket Type</h4>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="type" id="silver" value="silver" onChange={(a) => {setType(a.target.value)}} checked={Type === "silver"}/>
                                    <label className="form-check-label" htmlFor="silver">
                                    Silver
                                    </label>
                                </div>
                          
                      
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="type" id="gold" value="gold" onChange={(a) => {setType(a.target.value)}} checked={Type === "gold"}/>
                                    <label className="form-check-label" htmlFor="gold">
                                    Gold
                                    </label>
                                </div>
                            
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="type" id="platinium" value="platinium" onChange={(a) => {setType(a.target.value)}} checked={Type === "platinium"}/>
                                    <label className="form-check-label" htmlFor="silver">
                                    Platinium
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h4></h4>
                            <div className="form-group">
                                <div className="form-check">
                                <label className="form-label" htmlFor="quantity">
                                        Quantity
                                    </label>
                                    <input className="form-control" type="number" name="quantity" id="quantity" value={Quantity} onChange={(a) => {setQuantity(a.target.value)}} />  
                                </div>
                            </div>
                        </div>


                        <div className="mb-4">
                            <h4>Glasses Include</h4>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="glasses" id="yes" value="yes" onChange={ChangeGlasses} checked={Glasses === "yes"}/>
                                    <label className="form-check-label" htmlFor="yes">
                                    Yes
                                    </label>
                                </div>
                          
                      
                              
                            
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="glasses" id="no" value="no" onChange={ChangeGlasses} checked={Glasses === "no"}/>
                                    <label className="form-check-label" htmlFor="no">
                                    No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <input type="submit" className="btn btn-primary" value="Print Bill" />

                        </form>

                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body card-dark">
                                <h4 className="text-center">Bill Details</h4>
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Movie Name</th>
                                            <th>Movie Ticket Type</th>
                                            <th>Glasses Include</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td>{User}</td>
                                        <td>{Movie}</td>
                                        <td>{Type}</td>
                                        <td>{Glasses}</td>
                                        <td>{Quantity}</td>
                                        <td>{Total}</td>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}