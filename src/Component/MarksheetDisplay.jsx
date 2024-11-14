function MarksheetDisplay(props) {

    return(
        <div>
          <table className="table table-bordered">
    <thead>
        <tr>
            <th>Name</th>
            <th>Eng</th>
            <th>Urdu</th>
            <th>Math</th>
            <th>Total</th>
            <th>Per</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{props.a}</td>
            <td>{props.b}</td>
            <td>{props.c}</td>
            <td>{props.d}</td>
            <td>{props.e}</td>
            <td>{props.f}</td>
        </tr>
    </tbody>
</table>

        </div>

    );
}
export default MarksheetDisplay;