import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg p-4 fw-bold">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="text-primary m-0">Contact <span className='text-warning'>App</span></h1>
          <div className="d-flex gap-2 ">
            <Link to={'/add'} className="btn btn-primary">Add Contact</Link>
            <Link to={'/search'} className="btn btn-warning">Search</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header