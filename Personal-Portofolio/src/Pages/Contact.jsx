import React from 'react'

function Contact() {
  return (
    <div id='contact'>
    <div className='contact2'>
      <input type="text" placeholder='Enter Your Name' /><br></br>
      <input type="email" placeholder='Enter Your Gmail' /><br></br>
      <input type="number" placeholder='Enter Your Phone ' /><br></br>
    </div>
    <button>Send</button>
    <div className='contact1'>
      <h1>Contact Us</h1>
      {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sit amet consectetur, adipisicing elit. Neque sit amet consectetur, adipisicing elit. Neque sit amet consectetur, adipisicing elit. Neque </p>
      <h3>0612000442</h3> */}
    </div>
   

    </div>
  )
}

export default Contact