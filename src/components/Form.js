import "../css/Form.css"
function Form () {

    return(
        <>
          <form className="container">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" id="name" className="form-control" required/>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" className="form-control" required/>
            </div>

            <div className="mb-3">
              <label htmlFor="course" className="form-label">Course</label>
              <input type="text" id="course" className="form-control" required/>
            </div>
            <button className="btn">Submit</button>
          </form>
        </>
    )
}
export default Form;