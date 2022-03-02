import React, { useEffect, useState } from 'react'
import { Button,Row,Col } from 'react-bootstrap'

const Assignment1 = () => {
    const [inputValue, setInputValue] = useState({
        firstIP: 0,
        secondIP: 0
    })
    const [output, setOutput] = useState(0)
    const { firstIP, secondIP } = inputValue
    const handleChange = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }
    const addSubmit = (ip) => {
        if(ip==='add'){
            setOutput(Number(firstIP)+Number(secondIP))
        }
        else if(ip==='sub'){
            setOutput(firstIP - secondIP)
        }
        else if(ip==='mul'){
            setOutput(firstIP*secondIP)
        }
        else{
            setOutput(firstIP/secondIP)
        }
    }
useEffect(()=>{

},[output])
    return (
        <center>
            <div>
                <h2>Assignment 1</h2>
            <label>Input1</label>
            <input type='number' name='firstIP' value={firstIP} onChange={handleChange} />
            </div>
            <div>
            <label>Input2</label>
            <input type='number' name='secondIP' value={secondIP} onChange={handleChange} />
            </div>
            <div style={{marginLeft:'300px',marginRight:'300px'}}>
            <Row className="mx-0">
            <Button as={Col} className='mx-2' variant='info' onClick={()=>addSubmit('add')}>Add</Button>
            <Button as={Col} className='mx-2' variant='secondary' onClick={()=>addSubmit('sub')}>Substract</Button>
            <Button as={Col} className='mx-2' variant='warning' onClick={()=>addSubmit('mul')}>Multiplication</Button>
            <Button as={Col} className='mx-2' variant='danger' onClick={()=>addSubmit('div')}>Devision</Button>
            </Row>
            </div>
            <div>Output:{output}</div>
<hr/>
        </center>
    )
}

export default Assignment1