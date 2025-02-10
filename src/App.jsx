import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import SearchBar from './components/SearchBar'
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  const localStorageKey = 'outContact';

  const [outContact, setOutContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey)) || [] }) //state to store the contactList and sending contact to child
  
    useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(outContact))
  }, [outContact])
  

  const getContact = (data)=>{
    // console.log(data); //printing the data coming from child component ContactForm
    setOutContact(prev=>[...prev,data]); //adding the data to the contactList
    console.log(outContact);
  }  


  const deleteContact = (index)=>{
    console.log("working");
    return (
      setOutContact(outContact.filter((_,i)=>i!==index))
      
    )
      
   }

   const EditContact= (index,contact)=> {
    setOutContact(outContact.map((eachContact,i)=> {
      if(i===index){
        return contact;
      }
      else{
        return eachContact;
      }
    }))
   }

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to='/contactlist'/>}/>
        <Route path='/contactlist' element={<ContactList sendingContact = {outContact} deleteContact={deleteContact} EditContact={EditContact}/>}/>
        <Route path='/add' element={<ContactForm getContacts = {getContact}/>}/>
        <Route path='/search' element={<SearchBar sendingContact={outContact}/>}/>
      </Routes>
    </>
  )
}

export default App
