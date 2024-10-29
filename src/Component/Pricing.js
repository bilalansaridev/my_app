function Pricing(){

    function Sliver() {

       
        alert(`You selected the Silver Plan! | 1500 Price!`);
    }
    function Gold() {
        alert(`You selected the Gold Plan! | 2500 Price!`);
        // You can replace the alert with any other function, such as redirecting to a signup page
    }
    function Platinum() {
        alert(`You selected the Platinum Plan! | 3500 Price!`);
        // You can replace the alert with any other function, such as redirecting to a signup page
    }



    return(
        <>
        <div className="container mt-5">
      
    <div className="row">
      
        <div className="col-md-4">
            <div className="card border-secondary mb-4">
            <img src="https://images.pexels.com/photos/29005053/pexels-photo-29005053/free-photo-of-weathered-telecommunications-tower-against-overcast-sky.jpeg?auto=compress&cs=tinysrgb&w=500" style={{height: "500px"}} className="card-img-top" alt="..."/>
                <div className="card-header text-center bg-secondary text-white">
                    <h4>Silver Plan</h4>
                    <h2>RS 1500/month</h2>
                </div>
                <div className="card-body text-center">
                    <p>Up to 100 Mbps</p>
                    <p>Perfect for browsing</p>
                    <p>Includes 24/7 support</p>
                    <p>No contracts required</p>
                    <p>Free installation</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-secondary" onClick={Sliver} >Select Plan</button>
                </div>
            </div>
        </div>

        
        <div className="col-md-4">
            <div className="card border-warning mb-4">
            <img src="https://images.pexels.com/photos/2047901/pexels-photo-2047901.jpeg?auto=compress&cs=tinysrgb&w=500" style={{height: "500px"}} className="card-img-top" alt="..."/> 
                <div className="card-header text-center bg-warning text-dark">
                    <h4>Gold Plan</h4>
                    <h2>RS 2500/month</h2>
                </div>
                <div className="card-body text-center">
                    <p>Up to 300 Mbps</p>
                    <p>Ideal for streaming</p>
                    <p>Includes 24/7 support</p>
                    <p>No contracts required</p>
                    <p>Free installation</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-warning" onClick={Gold} >Select Plan</button>
                </div>
            </div>
        </div>

        
        <div className="col-md-4">
            <div className="card border-primary mb-4">
            <img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=500" style={{height: "500px"}} className="card-img-top" alt="..."/>
                <div className="card-header text-center bg-primary text-white">
                    <h4>Platinum Plan</h4>
                    <h2>RS 3500/month</h2>
                </div>
                <div className="card-body text-center">
                    <p>Up to 1 Gbps</p>
                    <p>Perfect for gaming</p>
                    <p>Includes 24/7 support</p>
                    <p>No contracts required</p>
                    <p>Free installation</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-primary" onClick={Platinum}>Select Plan</button>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Pricing;