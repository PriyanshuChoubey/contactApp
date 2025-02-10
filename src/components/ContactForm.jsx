import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContactsIcon from '@mui/icons-material/Contacts';

function ContactForm({getContacts}) {
    const [contact, setContact]= useState({name: "", number:""});
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        if(e.target.name === 'Name'){
            setContact({...contact,name:e.target.value})
        }
        else{
            setContact({...contact,number: e.target.value})
        }  
      
    }
    const handleBtn = (e) => {
        e.preventDefault();
        if(contact.name === "" || contact.number === ""){  
            alert('Please fill all the fields');
            return;
        }
        setShowToast(true);
        setTimeout(()=>setShowToast(false),3000);
        getContacts(contact); //we call the prop func to send the data to parent component
        setContact({name:"",number:""}); //to clear the form after submitting
    }

  return (
    <>
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <div className="card bg-dark-subtle text-black border-success shadow-lg p-4 rounded">
                    <div className="card-body">
                    <h2 className="text-center text-primary"><ContactsIcon/> New Contact</h2>
                    <form onSubmit={handleBtn}>
                        <div className="mb-3">
                        <label className="form-label fw-bold">Name:</label>
                        <input
                            type="text"
                            className="form-control border-dark m-auto "
                            placeholder="Enter Name"
                            name="Name"
                            value={contact.name}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <div className="mb-3">
                        <label className="form-label fw-bold">Phone:</label>
                        <input
                            type="tel"
                            className="form-control border-dark m-auto"
                            placeholder="Phone number"
                            name="Number"
                            value={contact.number}
                            pattern="[0-9]{10}"
                            title="Please enter a 10-digit phone number"
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" >
                        <AddIcon /> Add Contact
                        </button>
                        <div className="container">
                            <div className="grid">
                                <div className="row">
                                    <div className="col m-auto">
                                        <Link to={'/'} className='btn btn-dark w-50'> <ArrowBackIcon/> Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                        {showToast && (
                            <div className="toast show position-fixed bottom-0 end-0 m-3 bg-success text-white" role="alert">
                                <div className="toast-body fw-bold">✅ Contact Saved Successfully!</div>
                            </div>
                        )}
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
       
    </>
    
  )
}

export default ContactForm