import React from 'react'

export default function Completion() {
  let registrationId = new Date().getTime()
  return (
    <div>
      <div className="container  success"  >
        <div className="icon-container "><h1 className='text-center '> Congratulations ! </h1>  </div>
        <h3 className='fs-4'>Successfully Registered for the Course.</h3>
        <p className='fs-5'>Registration Id is - {registrationId}</p>
      </div>
    </div>
  )
}
