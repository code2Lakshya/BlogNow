import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className='flex flex-col gap-y-10 my-4 w-screen px-4 max-w-[800px] mx-auto py-20'>
      <Header/>
      <div>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
