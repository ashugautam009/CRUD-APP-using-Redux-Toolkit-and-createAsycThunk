import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUser } from '../api/userdataRead'

const Read = () => {

  //useSelector
  const {user,loading}=useSelector((state)=>{
    return state.app
  })
  console.warn(user);

  const dispatch=useDispatch()
  
  useEffect(() => {
    dispatch(showUser())
  }, []);
  
  if(loading){
    return <h2>loading...</h2>
  }
  
  return (
    <div>
      <h2>All Data</h2>

      <div>
        {user && 
          user.map((ele) => (
            <div className='card w-50 mx-auto my-2'>
            <div className='card-body'>
            <h5 className='card-title'>{ele.name}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>{ele.email}</h6>
            <p className='card-text'>{ele.age}</p>
            <a href='#' className='card-link'>Card Link</a>
            <a href='#' className='card-link'>Another Link</a>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Read