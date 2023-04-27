 function TableRaw({id, name, email, course, onDelete, onUpdate}) {

    function deleteRaw() {
        onDelete(id)
    }

    function updateRaw() {
        onUpdate(id)
    }

    return(
        <>
             <tr key="student.id">
                 <th scope="row">{id}</th>
                 <td>{name}</td>
                <td>{email}</td>
                 <td>{course}</td>
                <td>
                    <button className="btn m-2" onClick={updateRaw}>Update</button>
                    <button className="btn" onClick={deleteRaw}>Delete</button>
                 </td>
            </tr>
        </>
    )
 }
 export default TableRaw;