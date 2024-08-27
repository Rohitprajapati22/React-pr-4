import { useState } from "react"
import './table.css'


const Table = () => {

    const [tableInput, SetInput] = useState([
        { id: "", name: "", email: "", salary: "" }
      ] )

    const add = () => {
        let newfield = { id: Math.floor(Math.random() * 1000), name: "", email: "", salary: "" }
        SetInput([...tableInput, newfield]);
    }
    const remove = (id) => {
        let updatedata = tableInput.filter((item) => item.id != id);
        SetInput(updatedata);
    }

    const handleInputChange = (id, field, value) => {
        const updatedtableInput = tableInput.map((item) => 
            item.id === id ? { ...item, [field]: value } : item
        );
        SetInput(updatedtableInput);
    };


    return (
        <div className="main" align="center">
            <h1>React - Add & Delete table Rows Dyanamically</h1>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Salary</th>
                        <th><button onClick={() => add()}>+</button></th>
                    </tr>
                </thead>
                <tbody>
                {
                        tableInput.map((val) => (
                            <tr key={val.id} align="center">
                                <td>
                                    <input type="text" value={val.name} onChange={(e) => handleInputChange(val.id, 'name', e.target.value)} />
                                </td>
                                <td>
                                    <input type="text" value={val.email} onChange={(e) => handleInputChange(val.id, 'email', e.target.value)} />
                                </td>
                                <td>
                                    <input type="text" value={val.salary} onChange={(e) => handleInputChange(val.id, 'salary', e.target.value)}/>
                                </td>

                                <td>
                                    <button onClick={() => remove(val.id)}>X</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </div>
    )
}

export default Table