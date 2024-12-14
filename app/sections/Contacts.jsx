"use client"
import React from 'react'
import {useRef,useState} from 'react'
import emailjs from '@emailjs/browser'
const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  })
  const handleChange=({target:{name,value}})=>{
    setForm({...form,[name]:value})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    setLoading(true);
    try{
     await emailjs.send(
        "service_vns79by",
        "template_mwvh7rh",
        {from_name:form.name,
          to_name:"Ahmed",
          from_email:form.email,
          to_email:"ahamednafees777@gamail.com",
          message:form.message
          },
          "dvLuWBSnIDOvr1sv9"),
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible");
        setForm({
          name:"",
          email:"",
          message:""
        })
    }catch(err){
      setLoading(false);
      console.log(err);
      alert(" Oops!,Something went wrong");
    }
    
   
  }
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen 
      flex justify-center items-center">
        
        <img src="../assets/terminal.png" alt="background-terminal" 
        className="absolute inset-0 min-h-screen"/>
        <div className="contact-container ">
        <h3 className="head-text flex-col mt-9">Contact Me</h3>
        <p className="text-lg text-white-600 mt-3">
          wether to build new exciting projects or to add 
          new features to existing projects with a flare of 
          exceptional innovation, I am here to help.
        </p>
        <form ref={formRef} onSubmit={handleSubmit}
        className="mt-12 flex flex-col space-y-7">
          <label className="space-y-3" >
            <span className="field-label">Full Name</span>
         
          <input 
          type="text" 
          name="name"
          value={form.name}
          onChange={handleChange} 
          required
          className="field-input"
          placeholder="Your Name"/>
           </label>
           <label className="space-y-3">
            <span className="field-label">Email</span>
         
          <input 
          type="email" 
          name="email"
          value={form.email}
          onChange={handleChange} 
          required
          className="field-input"
          placeholder="Yourname@gmail.com"/>
           </label>
           <label className="space-y-3">
            <span className="field-label">Your Message</span>
         
          <textarea 
          name="message"
          value={form.message}
          onChange={handleChange} 
          required
          rows={4}
          className="field-input"
          placeholder="Hi I'm Interested in..."/>
           </label>
           <button 
           className="field-btn"
          type="submit"
          disabled={loading}>
            {loading ? "Sending..." : "Send"}
            <img src="../assets/arrow-up.png" alt="arrow-up" 
            className="field-btn_arrow"/>
          </button>
        </form>
        </div>
      </div>
     
      
    </section>
  )
}

export default Contacts
