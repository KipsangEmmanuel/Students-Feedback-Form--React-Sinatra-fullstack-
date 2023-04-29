import NavBar  from "./components/NavBar";
import Form from "./components/Form";
import Table from "./components/Table";
import TableRaw from "./components/Student";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/students" element={<Table />}></Route>
        <Route path="/response" element={<Form />}></Route>
        <Route path="/" element={<Table />}></Route>

      </Routes>
      </BrowserRouter>
      {/* <Form />
      <Table />
      <TableRaw /> */}

    </div>
  );
}

export default App;
