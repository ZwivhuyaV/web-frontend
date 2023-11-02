import { useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    if (!firstName || !lastName || !contactNumber || !email || !physicalAddress || !password || !confirmPassword) {
      alert('Please fill in all the fields');
      return;
    }

    if (password.length < 8) {
      alert('Password should be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

        router.push('/signup');
  };

  const handleLogin = () => {
    router.push('/');
  };


  return (
    <div className="container">
      <div className="form">
        <h1 className="title">SIGN UP</h1>
        <div className="logo">
          <img src="/carerunnerlogo.png" alt="Your Logo" className="logo-image" />
        </div>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input"
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input"
        />
        <br />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="input"
        />
        <br />
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <br />
        <input
          type="text"
          placeholder="Physical Address"
          value={physicalAddress}
          onChange={(e) => setPhysicalAddress(e.target.value)}
          className="input"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input"
        />
        <br />
        <button onClick={handleSignUp} className="signUpButton">
          Sign Up
        </button>
        <p style={{ marginTop: '20px' }}>
          Already have an account?{' '}
          <span
            style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }}
            onClick={handleLogin}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;
