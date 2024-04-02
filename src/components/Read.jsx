import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUser } from '../api/userdataRead'
import CustomModal from './CustomModal'
const Read = () => {
  const [popup,Setpopup]=useState(false);
  console.log('pop us is ',popup)

  const [id,Setid]=useState();
  console.log('id us is ',id);
  
  //useSelector
  const {user,loading}=useSelector((state)=>{
    return state.app
  })
  //console.warn(user);

  const dispatch=useDispatch()
  
  useEffect(() => {
    dispatch(showUser())
  }, []);
  
  if(loading){
    return <h2>loading...</h2>
  }
  
  return (
    <div>
      {popup && <CustomModal/>}
      <h2>All Data</h2>

      <div>
        {user && 
          user.map((ele) => (
            
            <div  key={ele.id} className='card w-50 mx-auto my-2'>
            <div className='card-body'>
            <h5 className='card-title'>{ele.name}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>{ele.email}</h6>
            <p className='card-text'>{ele.gender}</p>
            <button 
              className='card-link' 
              onClick={()=>[Setid(ele.id),Setpopup(true)]}>
                View
            </button>
            <a href='#' className='card-link'>Edit</a>
            <a href='#' className='card-link'>delete</a>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Read