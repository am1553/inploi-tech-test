import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/paradigmo_logo.png'
function Header() {
  return (
    <div className='h-32 flex items-center justify-between mx-12'>
      <Image src={Logo} alt="logo" width={50} height={50}/>
      <button className='bg-mint text-white w-40 h-10 rounded-lg'>Login</button>
    </div>
  )
}

export default Header