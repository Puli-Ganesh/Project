import React,{useState} from 'react';
import '../styles/Contact.css'; 
const ContactUs=()=>{
    const [showLogin,setShowLogin]=useState(false);
    const [showSignup,setShowSignup]=useState(false);
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [message,setMessage]=useState('');

    const handleLoginSubmit=(e)=>{
        e.preventDefault();
        console.log('Logging in with:', username, password);};

    const handleSignupSubmit=(e)=>{
        e.preventDefault();
        if (password === confirmPassword){
            setMessage('Your account has been created successfully!');
        } else{
            alert('Passwords do not match!');
        }};

    return(
        <div className="contact-us">
            <h2>Contact Us</h2>
            <p>Click on the buttons below to login or sign up</p>
            <div className="buttons">
                <button onClick={()=>{setShowLogin(true); setShowSignup(false); }}>Login</button>
                <button onClick={()=>{setShowLogin(false); setShowSignup(true); }}>Signup</button>
            </div>
            {showLogin &&(
                <div className="form-container">
                    <h3>Login</h3>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div> )}
            {showSignup && (
                <div className="form-container">
                    <h3>Signup</h3>
                    <form onSubmit={handleSignupSubmit}>
                        <div className="input-group">
                            <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                        </div>
                        <div className="input-group">
                            <input type="password"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
                        </div>
                        <div className="input-group">
                            <input type="password"  placeholder="Confirm Password" value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}  required/>
                        </div>
                        <button type="submit">Signup</button>
                    </form>
                </div>)}
            {message && <div className="success-message">{message}</div>}
        </div>
    );
};

export default ContactUs;
