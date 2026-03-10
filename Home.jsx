function Home({ user, onLogout }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-blue-400">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome!</h1>
        
        <div className="mb-6">
          <p className="text-xl text-gray-700">Hello, <span className="font-bold text-blue-600">{user.name}</span></p>
          <p className="text-gray-600">Email: {user.email}</p>
        </div>

        <button
          onClick={onLogout}
          className="w-full bg-red-500 text-white p-3 rounded font-bold hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
