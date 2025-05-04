import React from 'react'

export default function starter() {
    return (
        <div className=''>
            <div>
                <img src='/assets/images/ellipse2.png' alt="ellpse-1" className='ellipse-1 mx-auto d-block' />
            </div>
            <div className='text-center starter-section'>
                <p className={`fw-bold sectionTitle`}>Code in Details</p>
                <h1 className='fw-bold text-white portfolio-text'>PORTFOLIO</h1>
            </div>

            <div className='signature-section position-relative'>
                <img src='/assets/images/signature/big-text.gif' alt="signature" className='signature position-absolute' />
                {/* <video src='assets/images/signature/Signature.mp4' className='signature position-absolute' autoPlay ></video> */}
            </div>
        </div >
    )
}
