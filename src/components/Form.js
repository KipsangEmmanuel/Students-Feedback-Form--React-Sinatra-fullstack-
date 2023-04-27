import { useState } from "react";
import "../css/Form.css"
function Form () {
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     course: ""
   })
   // cupture the user input values

   function captureInput(event) {
     event.preventDefault()
     setFormData({...formData, [event.target.id]: event.target.value});
   }

   function handleSubmit() {
    fetch("http://localhost:3002/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    // .then((res) = res.json())
    // .then(data => console.log(data))
   }

    return(
        <>
          <form className="container" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="form-control" 
                value={formData.name} 
                onChange={captureInput}  
                required/>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
              type="email" 
              id="email"
              value={formData.email} 
              onChange={captureInput}
              className="form-control" 
              required/>
            </div>

            <div className="mb-3">
              <label htmlFor="course" className="form-label">Course</label>
              <input 
              type="text" 
              id="course" 
              value={formData.course}
              onChange={captureInput}
              className="form-control" 
              required/>
            </div>
            <button className="btn">Submit</button>
          </form>
        </>
    )
}
export default Form;