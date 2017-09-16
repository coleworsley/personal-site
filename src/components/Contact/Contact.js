import React, { Component } from 'react';
import './Contact.css'


export class Contact extends Component {

  render() {
    return (
      <div className='contact'>
        <h1 className='contact-title'>Contact Me</h1>
        <form id='contact' autoComplete='off'>
          <input
            id='name'
            type='text'
            placeholder='Name'
            name='name'
          />
          <input
            id='email'
            type='text'
            placeholder='Email'
            name='email'
          />
          <input
            id='subject'
            type='text'
            placeholder='Subject'
            name='subject'
          />
          <textarea
            name='message'
            id='message'
            placeholder='Message'>
          </textarea>
          <input type='submit' value='Send'/>
        </form>
      </div>
    )
  }
}
