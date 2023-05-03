import React from 'react'
import Link from 'next/link'
export default function Header(props) {
    const handleMenuItemClick = (sectionId) => {
        props.onMenuItemClick(sectionId);
    };
    return (
        <div>
            <div className='flex justify-between header_desktop'>
                <Link href='./'>
                    <img src='https://ik.imagekit.io/juwoncaleb/lg3_Eh72ewKf5.webp?updatedAt=1683135944199' className='header_items logo cursor-pointer'></img>

                </Link>
                <Link href='./About'>
                    <p className='header_items mt-3 cursor-pointer'>About</p>
                </Link>
                <Link href='./portfolio'>
                    <p className='header_items mt-3 cursor-pointer'>Portolio</p>
                </Link>
                <a href='https://medium.com/@calebomojuwon' className='header_items cursor-pointer mt-3'>Articles</a>
                <Link href='./contact'>
                <p className='header_items mt-3 cursor-pointer'>Contact</p>

                </Link>
            </div>
        </div>
    )
}
