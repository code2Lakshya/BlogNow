import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className=' flex flex-col gap-2 flex-wrap'>
      <NavLink to={`/blog/${post.id}`} >
        <span className=' font-bold text-lg hover:underline'>{post.title}</span>
      </NavLink>
      <p className='mt-[-4px]'>
        By
        <span className=' italic'> {post.author} </span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='font-bold underline'>{post.category}</span>
        </NavLink>
      </p>
      <p className=' mt-[-8px]'> Posted on {post.date} </p>
      <p> {post.content}</p>
      <div className='flex gap-2 text-blue-500 flex-wrap'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='underline text-sm'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
