// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AdminSignup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [code, setCode] = useState(''); // Admin code input
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/admin/signup', {
//         email,
//         password,
//         code, // Send admin code to backend
//       });

//       if (response.data.success) {
//         setMessage('Admin created successfully');
//         setTimeout(() => {
//           navigate('/admin/login');
//         }, 1500);
//       } else {
//         setMessage(response.data.message || 'Signup failed');
//       }
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message) {
//         setMessage(err.response.data.message); // ✅ Shows 'Invalid admin code' if returned from backend
//       } else {
//         setMessage('Error creating admin');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Admin Signup</h2>
//         {message && <p className="text-sm text-center text-red-600 mb-4">{message}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-4 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-4 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <input
//           type="text"
//           placeholder="Enter Admin Code"
//           className="w-full p-2 mb-4 border rounded"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//         >
//           Signup
//         </button>

//         <button
//           type="button"
//           onClick={() => navigate('/admin/login')}
//           className="w-full mt-2 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
//         >
//           Go to Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminSignup;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminSignup.css';
const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState(''); // Admin code input
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://hesita-design.onrender.com/api/admin/signup', {
        email,
        password,
        code, // Send admin code to backend
      });

      if (response.data.success) {
        setMessage('Admin created successfully');
        setTimeout(() => {
          navigate('/admin/login');
        }, 1500);
      } else {
        setMessage(response.data.message || 'Signup failed');
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setMessage(err.response.data.message); // ✅ Shows 'Invalid admin code' if returned from backend
      } else {
        setMessage('Error creating admin');
      }
    }
  };

  return (
    <div className="adminSignup">
      <form onSubmit={handleSignup} className="adminSignupForm">
        <h2>Admin Signup</h2>
        {message && <p className={`message ${message.includes('Error') ? 'error' : 'success'}`}>{message}</p>}

        <input
          type="email"
          placeholder="Email"
          className="inputField"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="inputField"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter Admin Code"
          className="inputField"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />

        <button type="submit" className="submitButton">
          Signup
        </button>

        <button
          type="button"
          onClick={() => navigate('/admin/login')}
          className="redirectButton"
        >
          Go to Login
        </button>
      </form>
    </div>
  );
};

export default AdminSignup;
