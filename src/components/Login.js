import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, NavLink } from 'react-router-dom'

const Login = () => {
    const history = useNavigate()

    const [inpval, setInpval] = useState({
        email: "",
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
        const getUserArray = localStorage.getItem("useryoutube")
        const { email, password} = inpval 

        if (email === "") {
            alert("Email field is required!")
        } else if (!email.includes("@")) {
            alert("Please, enter a valid email address!")
        } else if (password === "") {
            alert("Password field is required!")
        } else if (password.length < 5) {
            alert("This password is too short! It must contain around 5 and 8 characters!")
        } else if (password.length > 8) {
            alert("This password is too long! It must contain around 5 and 8 characters!")
        } else {
            if (getUserArray && getUserArray.length) {
                const userdata = JSON.parse(getUserArray)
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                })
                if (userlogin.length === 0) {
                    alert("Invalid details!")
                } else {
                    localStorage.setItem("user_login", JSON.stringify(getUserArray))
                    history("/details") 
                }
            }
        }
    }

    return (
    <React.Fragment>
        <div className='container mt-3'>
            <section>
                <h3 className='text-center col-lg-6'>Sign In</h3>
                <Form>
                    <Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
                        <Form.Control onChange={getdata} name='email' type='email' placeholder='Enter email' />
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

                <p className='mt-3'>Don't have an Account yet? 
                    <NavLink to='/'>SignUp</NavLink> 
                </p> 
            </section>
        </div>
    </React.Fragment>
    )
}

export default Login