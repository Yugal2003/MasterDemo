import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { forgetPassword } from '../../api';

const ForgetPassword = () => {
    const [emailValue,setEmailValue] = useState("")
    const [forgetPage,setForgetPage] = useState(false);
    const [newPassword,setNewPassword] = useState("");
    const [coNewPassword,setCoNewPassword] = useState("");


    const handlePasswordSubmit = async(e) =>{
        e.preventDefault();
        try {
            if(newPassword === coNewPassword){
                alert("same password !")
            }
            else{
                toast.error("Both Password Not Matched !")
            }
        } catch (error) {
            
        }
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            if(emailValue === ''){
                toast.error("Please Enter Email !")
                return;
            }
            const response = await forgetPassword(emailValue);
            console.log(response);
            if(response){
                localStorage.setItem('user', JSON.stringify(response));
                setForgetPage(true);
            }
            else{
                toast.error('Email Not Register !')
            }
        } 
        catch (error) {
            toast.error('Email Invalid !')
        }
    } 
  return (
    <div>
        {
            forgetPage 
            ?
                <div>
                    <input value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} type='email' placeholder='New Password...'/>
                    <input value={coNewPassword} onChange={(e)=>setCoNewPassword(e.target.value)} type='email' placeholder='Confirm New Password...'/>
                    <button onClick={handlePasswordSubmit} type='submit'>Submit</button>
                </div> 
            :
                <div>
                    <input required value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} type='email' placeholder='Enter Your Email...'/>
                    <button onClick={handleSubmit} type='submit'>Submit</button>
                </div>
        }
    </div>
  )
}

export default ForgetPassword