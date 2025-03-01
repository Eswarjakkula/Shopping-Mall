import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>

        <div className="Left">
            <div className="title">
                <h2>Shopping Mall</h2>
            </div>
        </div>
        <div className="Center">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Children</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="Search">
            <input  type="text" placeholder='Search ' />
        </div>
        <div className="Right">
            Signin/Signup
            <div className="cart">
            Cart 
        </div>
        </div>
        
    
    
    
    </div>
  )
}

export default Header