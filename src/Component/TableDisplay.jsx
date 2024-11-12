 function TableDisplay(props) {

    return(
        <div>
            <table className="table table-bordered">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </thead>
                <tbody>
                
                    <td>{props.a}</td>
                    <td>{props.b}</td>
                    <td>{props.c}</td>
                   
                </tbody>

            </table>
        </div>

    );
}
export default TableDisplay;