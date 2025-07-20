import React, { useState }from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Myprojects from './components/myprojects/Myprojects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import './components/model/model.css';
import Model from "./components/model/model"
import ModelWithButton from "./components/model/modelWithButton"

const App = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [sentSuccessful, setSentSuccessful] = useState(false);
  const [sentFail, setSentFail] = useState(false);
  
  return (
    <>
      <div className={`main-content ${showLoader || sentSuccessful || sentFail ? "blurred" : ""}`}>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Myprojects/>
        <Contacts 
          setShowLoader={setShowLoader}
          setSentSuccessful={setSentSuccessful}
          setSentFail={setSentFail}
        />
        <Footer/>
      </div>
      {showLoader && <Model message={"your message being send..."}/>}
      {sentSuccessful && <Model 
        message={"your message has been send!"} 
        sentSuccessful={sentSuccessful} 
        setShowLoader={setShowLoader}
        setSentSuccessful={setSentSuccessful}
        setSentFail={setSentFail}/>
      }
      {sentFail && <Model 
        message={"there is some problem while sending your message"} 
        sentFail = {sentFail}
        setShowLoader={setShowLoader}
        setSentSuccessful={setSentSuccessful}
        setSentFail={setSentFail}/>
      }
    </>
  )
}

export default App