import { useEffect } from "react";
import "../css/Table.css"
import { useState } from "react";
import TableRaw from "./Student";
function Table() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        // fetch logic goes here
        fetch("http://[::1]:8000/students")
            .then((res) => res.json())
            .then(data => setStudents(data))
    }, [])


    function deleteRecord(id) {
        fetch(`http://[::1]:8000/students/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then(data => console.log(data))
    }

    function updateRecord(id) {
        fetch(`http://localhost:3002/students/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Emmanuel Kipsang",
                email: "emmanuel@gmail.com",
                course: "Software Engineering"
            })
        })
            .then((res) => res.json())
            .then(data => console.log(data))
    }

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
                                    onDelete={deleteRecord}
                                    onUpdate={updateRecord}
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