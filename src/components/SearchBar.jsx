import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SearchBar({sendingContact}) {
    const [searchedContact, setSearchedContact] = useState('');

    const handleChange = (e) => {
        setSearchedContact(e.target.value);
    }  
   

    const filterContact = sendingContact.filter((contact) => contact.name.toLowerCase().includes(searchedContact.toLowerCase()));
  
    return (
    <>
        <div className='d-flex justify-content-center'>
          <label className='fw-bold m-2'><h4>Search Contacts:  </h4></label>
          <input type="text" placeholder='type here..' name='searchbar' value={searchedContact} onChange={handleChange}/>
          <Link to={'/'} className='btn btn-dark m-2'>Back</Link>
        </div>
        
        {filterContact.length > 0 && (
        <ol>
          {filterContact.map(user => (
            // <li>{user.name}</li>
            <section className="view-contact mt-3">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="card  text-white shadow-lg p-3 rounded">
                      <div className="card-body">
                        <ul className="list-group ">
                          <li className="list-group-item list-group-item-primary bg-warning">
                            <span className="fw-bold ">Name:</span> {user.name}
                          </li>
                          <li className="list-group-item list-group-item-primary mt-2 bg-warning-subtle">
                            <span className="fw-bold">Number:</span> {user.number}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          ))}
        </ol>
      )}
      
    </>
  )
}

export default SearchBar