function Homepage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-2xl bg-white p-10 shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🎉 Welcome Back!
        </h1>
        <p className="text-gray-600">
          You have successfully logged in.  
          This is your simple homepage — we’ll connect it to the backend later.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
