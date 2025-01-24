import React from 'react'
import Navbar from "../../components/NavBar/navbar"
const login = () => {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <form onSubmit={ () => {}}>
            <h4 className='text-2xl mb-7'>Login</h4>

            <input type="text" placeholder="Email" className='input-box'/>

            <button type="submit" className='btn-primary'>Login</button>

            <p>Not registered yet</p>
          </form>
        </div>
      </div>
    </>
  )
}

export default login