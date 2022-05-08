import { Button, Form } from 'antd'
import React from 'react'

export default function LinkExpired() {
    return (
        <Form autoComplete='new-password' >
            <div className='mb-4 text-center'>
                <img src='/Images/link_expired.svg' height={150} />
                <h4 className='ant-modal-title_sm text-center'> Set Password Link Expired</h4>

                <p className='text-muted'>You can resend a new link by
                    registering your email ID.</p>
            </div>
            <p className='text-center' style={{
                color: '#FB5607'
            }}>Link expires in <b>00:00</b></p>
            <div className='mb-4'>
                <Button type="primary" className='w-100' size="large">
                    Continue
                </Button>
            </div>

        </Form>
    )
}
