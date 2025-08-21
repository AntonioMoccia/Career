import React from 'react'

function VerifiedPage() {
    return (
        <div className=' w-screen h-screen'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-2xl font-bold'>Email Verified</h1>
                <p className='text-lg'>Your email has been successfully verified.</p>
                <span className='text-sm'>Now you can close this window!</span>
            </div>
        </div>
    )
}

export default VerifiedPage