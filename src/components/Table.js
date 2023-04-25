import "../css/Table.css"
function Table() {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Student-id</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email Address</th>
                    <th scope="col">Course</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <button className="btn m-2">Update</button>
                        <button className="btn">Delete</button>
                    </td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}
export default Table;