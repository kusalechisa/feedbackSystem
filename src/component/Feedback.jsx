import React from 'react'
import './Feedback.css'
const Feedback = () => {
  return (
    <div className="containar">      
      <div className="feedback-header">
     
      <p>We would love to hear your thoughts, suggestions, concerns or problems with anything so we can improve!</p>
      </div>
      <hr />
      <div className="radio-form">
        <h3>Feedback Type</h3>
        <input type="radio" name="radioGroup" id="comment"  className='radio'/> 
        <label htmlFor="comment">Comment</label>
        <input type="radio" name="radioGroup" id="" className='radio'/>
        <label htmlFor="suggestion">Suggestions</label> 
        <input type="radio" name="radioGroup" id="" className='radio'/>
        <label htmlFor="question">Questions</label>  
      </div>
      <hr />
      <div className="textarea">
        <h4 >Describe Your Feedback <span className='required'>*</span></h4>
        <textarea name="" id="" cols="80" rows="10" required placeholder='please write something'></textarea>
      </div>
      <p>Name <span className='required'>*</span></p>
      
       <div className="name">
       <div className="first-name">
            <input type="text" name="" id="firstname" className='fname'/>
            <label htmlFor="firstname">First Name</label>
        </div>
        <div className="last-name">
            <input type="text" name="" id="lastname" className='lname'/>
            <label htmlFor="firstname">Last Name</label>
        </div>
       </div>
        <div className="email">
            <p>E-mail <span className="required">*</span></p>
            <input type="email" name="" id="" placeholder='name@gmail.com' />
        </div>
        
      
    </div>
  )
}

export default Feedback
