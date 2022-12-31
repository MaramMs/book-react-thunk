import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {logInOut} from '../store/authSlice'

function Header() {
    const {error} = useSelector(state => state.books);
    const {isloggedIn} = useSelector(state => state.auth)
    const dispatch = useDispatch()
  return (
    <>
    {
        error && 
        <div className='alert alert-danger mb-0' role='alert'>
            {error}
        </div>
    }
        <nav className='navbar navbar-dark bg-dark'>
    <span className='navbar-brand mb-0 h1'>My Books</span>

    <button className='btn btn-outline-primary' type='submit' onClick={() =>dispatch(logInOut())}>
 {
    isloggedIn ? 'logout' : 'login'
 }
    </button>
  </nav>
    </>

  )
}

export default Header