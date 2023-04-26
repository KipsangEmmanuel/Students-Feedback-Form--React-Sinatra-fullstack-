import { useEffect } from "react";
import "../css/Table.css"
import { useState } from "react";
import TableRaw from "./Student";
function Table() {
 const [students, setStudents] = useState([])

  useEffect(() => {
    // fetch logic
    fetch("http://localhost:3002/students")
    .then((res) => res.json())
    .then(data => setStudents(data))
  }, [])

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
                    {
                        students.map((student) => {
                            return (
                                <TableRaw 
                                    key={student.id}
                                    id={student.id} 
                                    name={student.name} 
                                    email={student.email} 
                                    course={student.course}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Table;