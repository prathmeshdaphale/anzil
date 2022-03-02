import React,{useState} from 'react'
import {Button, Table} from 'react-bootstrap'
const Assignment2 = () => {
    const [fname, setFname] = useState({
        firstName: '',
        lastName: ''
    })
    const [data, setData] = useState([])
    const { firstName, lastName } = fname
    const handleChange = (e) => {
        setFname({ ...fname, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        setData([...data, fname])
        setFname({firstName:'',lastName:""})
    }
    return (
        <center>
            <h2>Assignment No 2</h2>
            <div>
                <label>First Name</label>
                <input type='text' name='firstName' value={firstName} onChange={handleChange} />
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' name='lastName' value={lastName} onChange={handleChange} />
            </div>
            <Button varient='primary' onClick={handleSubmit}>Submit</Button>
            <div style={{marginLeft:'150px',marginRight:'150px'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sr. NO.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (<tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                        </tr>

                        )
                    })}

                </tbody>
            </Table>
            </div>
        </center>
    )
}

export default Assignment2