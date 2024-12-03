import React, { useState } from 'react';
const AuthPage = () => {
 const [isLogin, setIsLogin] = useState(true);
 const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [error, setError] = useState('');
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 if (isLogin) {
 if (username && password) {
 // Call login API here
 console.log('Login successful');
 } else {
 setError('Please fill in all fields');
 }
 } else {
 if (username && email && password && confirmPassword) {
 if (password === confirmPassword) {
 // Call register API here
 console.log('Registration successful');
 } else {
 setError('Passwords do not match');
 }
 } else {
 setError('Please fill in all fields');
 }
 }
 };
 return (
 <div className="flex justify-center items-center h-screen bg-gray-100">
 <div className="bg-white rounded-lg shadow-lg p-8 w-96">
 <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
 <form onSubmit={handleSubmit}>
 <div className="mb-4">
 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
 Username
 </label>
10
 <input
 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
focus:outline-none focus:shadow-outline"
 id="username"
 type="text"
 value={username}
 onChange={(e) => setUsername(e.target.value)}
 />
 </div>
 {!isLogin && (
 <div className="mb-4">
 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
 Email
 </label>
 <input
 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
focus:outline-none focus:shadow-outline"
 id="email"
 type="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 />
 </div>
 )}
 <div className="mb-4">
 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
 Password
 </label>
 <input
 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
focus:outline-none focus:shadow-outline"
 id="password"
 type="password"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 />
 </div>
 {!isLogin && (
 <div className="mb-4">
 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
 Confirm Password
 </label>
 <input
 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
focus:outline-none focus:shadow-outline"
 id="confirmPassword"
11
 type="password"
 value={confirmPassword}
 onChange={(e) => setConfirmPassword(e.target.value)}
 />
 </div>
 )}
 {error && (
 <div className="mb-4 text-red-500">{error}</div>
 )}
 <button
 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none
focus:shadow-outline"
 type="submit"
 >
 {isLogin ? 'Login' : 'Register'}
 </button>
 </form>
 <div className="mt-4 text-gray-700">
 {isLogin ? (
 <span>
 Don't have an account?{' '}
 <button
 className="text-blue-500 hover:text-blue-700"
 onClick={() => setIsLogin(false)}
 >
 Register
 </button>
 </span>
 ) : (
 <span>
 Already have an account?{' '}
 <button
 className="text-blue-500 hover:text-blue-700"
 onClick={() => setIsLogin(true)}
 >
 Login
 </button>
 </span>
 )}
 </div>
 </div>
 </div>
 );
};
export default AuthPage;