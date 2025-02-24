const LoadingScreen = () => {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-gray-900 text-white">
        <div className="flex flex-col items-center gap-4">
          {/* Loading Spinner */}
          <div className="w-12 h-12 border-4 border-gray-600 border-t-purple-500 rounded-full animate-spin"></div>
          
          {/* App Name */}
          <h1 className="text-2xl font-semibold tracking-wide text-purple-400">
            FunChat
          </h1>
        </div>
      </div>
    );
  };
  
  export default LoadingScreen;
  