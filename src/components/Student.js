 function TableRaw({id, name, email, course}) {
    return(
        <>
             <tr key="student.id">
                 <th scope="row">{id}</th>
                 <td>{name}</td>
                <td>{email}</td>
                 <td>{course}</td>
                <td>
                    <button className="btn m-2">Update</button>
                    <button className="btn">Delete</button>
                 </td>
            </tr>
        </>
    )
 }
 export default TableRaw;