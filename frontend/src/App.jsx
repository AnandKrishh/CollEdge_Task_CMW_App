import React from 'react'
import NavBar from './components/NavBar'
import ContactListContainer from './components/ContactListContainer'
import InputForm from './components/InputForm'

const App = () => {
  return (
    <div className='font-display'>
      <NavBar />
      <div className='grid grid-cols-1 md:grid-cols-[1fr_3fr]'>
        <ContactListContainer/>
        <InputForm />
      </div>
    </div>
  )
}

export default App