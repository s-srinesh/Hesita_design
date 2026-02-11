// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/admin/login', {
//         email,
//         password
//       });
//       if (res.data.success) {
//         alert('Login successful');
//         window.location.href = '/admin/dashboard'; // or use: navigate('/admin/dashboard');
//       } else {
//         setError(res.data.message);
//       }
//     } catch (err) {
//       setError('Invalid credentials or server error.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Admin Login</h2>
//         {error && <div className="text-red-600 mb-3 text-sm">{error}</div>}
        
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

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-2"
//         >
//           Login
//         </button>

//         <button
//           type="button"
//           onClick={() => navigate('/admin/signup')}
//           className="w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
//         >
//           Go to Signup
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://hesita-design.onrender.com/api/admin/login', {
        email,
        password
      });
      if (res.data.success) {
        alert('Login successful');
        window.location.href = '/admin/dashboard'; // or use: navigate('/admin/dashboard');
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError('Invalid credentials or server error.');
    }
  };

  return (
    <div className="adminLogin">
      <form onSubmit={handleLogin} className="adminLoginForm">
        <h2>Admin Login</h2>
        {error && <div className="message">{error}</div>}
        
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

        <button
          type="submit"
          className="submitButton"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => navigate('/admin/signup')}
          className="redirectButton"
        >
          Go to Signup
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
