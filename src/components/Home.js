import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    const [data, setData] = useState([])

    const getdata = (e) => {
        const {value, name} = e.target
        
        setInpval(() => {
            return {...inpval, [name]:value} 
        })
    }

    const addData = (e) => {
        e.preventDefault()
        const {name, email, date, password} = inpval

        if (name === "") {
            alert("Name field is required!")
        } else if (email === "") {
            alert("Email field is required!")
        } else if (!email.includes("@")) {
            alert("Please, enter a valid email address!")
        } else if (date === "") {
            alert("Date field is required!")
        } else if (password === "") {
            alert("Password field is required!")
        } else if (password.length < 5) {
            alert("This password is too short! It must contain around 5 and 8 characters!")
        } else if (password.length > 8) {
            alert("This password is too long! It must contain around 5 and 8 characters!")
        } else {
            alert("All data added successfully!")
            localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]))
        }
    }

    return (
        <React.Fragment>
        <div className='container mt-3'>
            <section>
                <h3 className='text-center col-lg-6'>Sign Up</h3>
                <Form>
                    <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                        <Form.Control onChange={getdata} name='name' type='text' placeholder='Enter your name' />
                    </Form.Group>

                    <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                        <Form.Control onChange={getdata} name='email' type='email' placeholder='Enter email' />
                    </Form.Group>

                    <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                        <Form.Control onChange={getdata} name='date' type='date' placeholder='Enter email' />
                    </Form.Group>

                    <Form.Group className='mb-3 col-lg-6' controlId='formBasicPassword'>
                        <Form.Control onChange={getdata} name='password' type='password' placeholder='Password' />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                        <Form.Check type='checkbox' label="Check me out" />
                    </Form.Group>

                    <Button onClick={addData} variant="primary" className='mb-3 col-lg-6' style={{background:"rgb(67, 185, 127)"}} type="submit">
                        Submit
                    </Button>
                </Form>

                <p className='mt-3'>Already have an Account?  
                    <NavLink to='/login'>SignIn</NavLink>
                </p>
            </section>
        </div>
        </React.Fragment>
    )
}

export default Home