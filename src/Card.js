function Card(){
    return(
        <div className="card-group">
  <div className="card">
    <img src="https://images.pexels.com/photos/2047901/pexels-photo-2047901.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height: "600px"}} className="card-img-top" alt="..."/> 
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://images.pexels.com/photos/29005053/pexels-photo-29005053/free-photo-of-weathered-telecommunications-tower-against-overcast-sky.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height: "600px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
   <img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height: "600px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    );
}

export default Card;