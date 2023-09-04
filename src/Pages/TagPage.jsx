import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div className='flex flex-col gap-y-10 my-4 w-screen px-4 max-w-[800px] mx-auto py-16'>
        <Header/>
        <div className='flex gap-4 items-center py-2'>
            <button className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={() => navigation(-1)}
            >
                Back
            </button>
            <h2 className=' text-[20px] font-bold'>
                Blogs Tagged <span className=' text-blue-400 underline'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
      
    </div>
  )
}

export default TagPage
