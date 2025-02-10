import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonIcon from '@mui/icons-material/Person';

function ContactList({sendingContact,deleteContact, EditContact}) {

  const [showDetails, setShowDetails] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);  
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [currentContact, setCurrentContact] = React.useState({name: '', number: ''}); 

  const handleShowDetail = (index) => {
    setShowDetails(showDetails === index ? null : index);
  }
  
  const handleEditClick = (contact,index) => {
    setCurrentContact(contact);    
    setCurrentIndex(index);
    setIsModalOpen(true);
  }

  const handleInput = (e) => {
    if(e.target.name==='name'){
      setCurrentContact({...currentContact, name: e.target.value});
    }
    else{
      setCurrentContact({...currentContact, number: e.target.value});
    }
  }

  const handleSave = () => {
    EditContact(currentIndex, currentContact);
    handleCloseModal();
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentContact({name: '', number: ''});
    setCurrentIndex(null);
  }

  
   
    const contactList = sendingContact.map((contact,index) => {
      return(
        <>
            {showDetails===index? false : true && 
              <div className="card text-center shadow-lg p-2 border-warning m-2">
                <div className='p-2' onClick={()=>handleShowDetail(index)}>{contact.name.charAt(0).toUpperCase()+contact.name.slice(1).toLowerCase()}</div>
              </div>
            }
            {showDetails === index &&
            (<div className="List " key={index}>
              <div className="container text-center mt-4">
                <div className="row justify-content-md-center">
                  <div className="col-md-8">
                    <div className="card border-primary shadow-lg p-3 rounded">
                      <div className="card-body bg-warning-subtle">
                        <h5 className="card-title fw-bold text-primary"><PersonIcon /> {contact.name}</h5>
                        <p className="card-text fw-bold text-muted">📞 {contact.number}</p>
                        <div className="d-flex justify-content-between mt-3">
                          <button className="btn btn-outline-danger btn-sm" onClick={() => {deleteContact(index)}}>
                            <DeleteIcon /> Delete
                          </button>
                          <button className="btn btn-outline-primary btn-sm" onClick={() => handleEditClick(contact, index)}>
                            <EditIcon /> Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>   
          )}
        </>
        )
      })



      return (
      <>
        <div className={isModalOpen ? 'blur-background' : ''}>      
          <div className='card border-dark bg-dark-subtle mt-2 p-3 ' onClick={()=>setShowDetails(null)}><h3 className='fw-bold text-dark'>CONTACT LIST</h3></div> 
          <div className="container mt-3">
            <div className="row">
              {contactList.map((contact, index) => (
                <div key={index} className="col-md-6 mb-2">
                  <div className="card border-dark bg-dark-subtle p-3 border rounded">
                    <h5 className="fw-bold text-muted text-center">{contact}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> 
        {
          isModalOpen && (
            <div className="modal d-flex align-items-center justify-content-center" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)' }}>
              <div className="card shadow-lg rounded p-4 bg-primary-subtle" style={{ width: '25rem' }}>
                <div className="card-body">
                  <span className="close float-end text-danger fs-4" onClick={handleCloseModal} style={{ cursor: 'pointer' }}>
                    <CancelIcon />
                  </span>
                  <h3 className="text-dark text-center fw-bolder">Edit Contact</h3>
                  <form onSubmit={handleSave}>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Name:</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control m-auto border-warning"
                        value={currentContact.name}
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Phone:</label>
                      <input
                        type="tel"
                        name="number"
                        className="form-control m-auto border-warning"
                        value={currentContact.number}
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit phone number"
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Update</button>
                  </form>
                </div>
              </div>
            </div>
        )}


        

      </>    
  )
}

export default ContactList