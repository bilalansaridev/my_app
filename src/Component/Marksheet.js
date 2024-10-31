function Marksheet(){


   
 

     function add(){
        
    var totalMarks = 300;
    var totalSubjet = 3;

          var Sub1 = parseFloat(prompt("Enter English Marks"));
    var Sub2 = parseFloat(prompt("Enter Urdu Marks"));
    var Sub3 = parseFloat(prompt("Enter Math Marks"));

    var finalTotal = Sub1 + Sub2 +Sub3;
    var result = finalTotal / totalMarks * 100;
    var show = Math.round(result);
    const show1 = show +" %";


    console.log("English Marks"+" "+Sub1 );
    console.log("Urdu Marks"+" "+Sub2 );
    console.log("Math Marks"+" "+Sub3 );
    console.log("------------------------");
    console.log("Obtained Marks "+" "+ finalTotal);
    console.log("Percentage"+" "+show1);
    

    };


    


    return(
        <>
        <h1 className="text-center">Marksheet</h1>

        <div className="container">
        <div className="row mx-auto align-items-center justify-content-center">
            <div className="col-12 ">
                <button className="btn btn-dark text-center" onClick={add}>Click Here ! </button>
            </div>
        </div>
        </div>

        

       
        </>
    );
}

export default Marksheet;