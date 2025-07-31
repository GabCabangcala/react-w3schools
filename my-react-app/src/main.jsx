import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function DOSTLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-blue-900 flex flex-col items-center justify-center p-8 text-white">
        {/* Logo placeholder - geometric pattern */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
            <div className="grid grid-cols-3 gap-1">
              <div className="w-2 h-2 bg-blue-300 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-200 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Department Name */}
        <div className="text-center">
          <h2 className="text-sm font-medium leading-tight">
            Department<br />
            of<br />
            Science<br />
            and<br />
            Technology
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              DOST-<span className="italic">CitiSense</span>
            </h1>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-200 border-0 rounded-md text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Password Field */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-200 border-0 rounded-md text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Login Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Login
              </button>

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember login
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}