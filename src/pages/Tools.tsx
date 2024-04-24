import React from 'react'
import { Link } from 'react-router-dom'

// type Props = {}

const Tools = () => {
  return (
    <>
        <h1 className='uppercase text-[3rem] text-center mt-20'> tools</h1>
        <h3 className='text-center'> some of the few technologies i have worked with and still use</h3>
        <div className='w-[50%] m-auto'>
            <ul className='flex gap-3 flex-wrap text-center  w-[50%] mt-6 m-auto'>
                <li>Html</li>
                <li>css</li>
                <li>javascript</li>
                <li>React js</li>
                <li>tailwindcss</li>
                <li>typescript</li>
            </ul>
        </div>
        <button className='mt-10 m-auto block underline text-[#585858]'>{<Link to= '/'> go back</Link>}</button>
    </>
  )
}

export default Tools