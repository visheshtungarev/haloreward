import { Button, Form, Input } from 'antd'
import React from 'react'
import { EyeOutlined } from '@ant-design/icons'
import "./index.css"
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <Form>
            <div className='mb-4'>
                <label>Email</label>
                <div className='lineinput'>
                    <Input placeholder="Email" autoComplete='email' type={'email'} />
                </div>
            </div>
            <div className='mb-4'>
                <label>Password</label>
                <div className='lineinput'>
                    <Input placeholder="Password" autoComplete='password' type={'password'} suffix={<EyeOutlined />} />
                </div>
            </div>
            <div className='mb-4'>
                <Button type="primary" className='w-100' size="large">
                    Login
                </Button>
            </div>
            <div className='mb-4 d-flex align-items-center justify-content-center'>
                <span className='orDevider'>or</span>
            </div>
            <div className='mb-4 text-center'>
                <p className='fw-bold'>Sign in with</p>
                <a href='google.com' target="_blank"><img src='/Images/google.svg' height={40} /></a> &nbsp;
                <a href='facebook.com' target="_blank"><img src='/Images/facebook.svg' height={40} /></a>
            </div>
            <div className='py-md-5 py-0'></div>
            <div className='mb-4 text-center fw-bold'>
                Don’t have an account yet? &nbsp;
                <Link to="">Register</Link>
            </div>
        </Form>
    )
}
