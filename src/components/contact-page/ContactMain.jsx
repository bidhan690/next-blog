import Notification from '../ui/notification'
import styles from './ContactMain.module.css'
import { useState,useEffect } from 'react'

async function DataFetch(dataa){
    const response = await fetch('/api/contact',{
        method:'POST',
        body: JSON.stringify(dataa),
        headers: {
            'Content-Type': 'application/json'
            },
    })
    const data = await response.json()
    if(!response.ok){
        throw new Error(data.message || 'Something Went Wrong!')
    } 
}


export default function ContactMain() {
    const [showStatus, setStatus] = useState()
    const [error,setError] = useState()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')


    useEffect(()=>{
     if(showStatus === 'success' || showStatus ==='error'){
        const timer = setTimeout(()=>{setStatus(null); setError(null)},3000)
        return () => clearTimeout(timer)
     }
    
    },[showStatus])

  async  function submitHandler(e){
        e.preventDefault()
       

        const data = {
            name: name,
            email: email,
            message: message
        }
        setStatus('pending')
        try{
           await DataFetch(data)
            setStatus('success')
            setName('') 
            setEmail('')
            setMessage('')
        } catch(err){
            setError(err.message)
            setStatus('error')
        }
    }


    
    let notify;
    
    if(showStatus === 'success'){
      notify ={title:'Sent Successfully',message:'Your message has been sent!',status:'success'}  
    } if(showStatus === 'pending'){
      notify ={title:'Sending.....',message:'Sending!',status:'pending'} 
    } if (showStatus === 'error') {
      notify = {title:'Error',message:error,status:'error'}
    }
      
        
    

 return <section className={styles.contact}>
    <h1>How can i help you?</h1>
  <form className={styles.form} onSubmit={submitHandler} >
    <div className={styles.controls}>
      <div className={styles.control}>
        <label htmfor='email'>Your Email</label>
        <input type='email' id='email' required value={email}  onChange={(e)=> setEmail(e.target.value)} />
      </div>
      <div className={styles.control}>
        <label htmfor='name'>Your Name</label>
        <input type='text' id='name' required value={name}  onChange={(e)=> setName(e.target.value)} />
      </div>
      </div>
      <div className={styles.control}>
        <label htmfor='message'>Your Message</label>
        <textarea rows='5' id='message' required value={message} onChange={(e)=> setMessage(e.target.value) } />
      </div>
      <div className={styles.actions}>
       <button type='submit' >Send Message</button>
      </div>
   
  </form>
 {notify &&  <Notification title={notify.title} message={notify.message} status = {notify.status} />}
 </section>

}
