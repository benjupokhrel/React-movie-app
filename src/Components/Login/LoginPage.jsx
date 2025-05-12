// import React, { useEffect, useState } from 'react';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setShowForm(true), 100); // Trigger entrance animation
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('Logging in with', { email, password });
//     // TODO: Add authentication logic
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
//       <div
//         className={`w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-2xl transform transition-all duration-700 ease-out ${
//           showForm ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
//         }`}
//       >
//         <h2 className="text-4xl font-bold text-center animate-fade-in">Sign In</h2>

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email Address</label>
//             <input
//               id="email"
//               type="email"
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600 transform transition duration-300 focus:scale-105"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm text-gray-300 mb-1">Password</label>
//             <input
//               id="password"
//               type="password"
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600 transform transition duration-300 focus:scale-105"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition transform hover:scale-105 hover:shadow-lg"
//           >
//             Sign In
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-400 animate-fade-in-slow">
//           New to Netflix? <a href="#" className="text-red-500 hover:underline">Sign up now</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
