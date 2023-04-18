import React from 'react'

export default function Header() {
    return (
        <div>
            <div className='flex justify-between header_desktop'>
                <img src='./home/lg3.png' className='header_items logo'></img>
                <p className='header_items mt-3'>About</p>
                <p className='header_items mt-3'>Portolio</p>
                <p className='header_items mt-3'>Articles</p>
                <p className='header_items mt-3'>Contact</p>
              
            </div>
        </div>
    )
}
