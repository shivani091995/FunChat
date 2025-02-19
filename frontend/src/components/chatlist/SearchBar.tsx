
const SearchBar = () => {
  return (
    <div className="relative">
      {/* Search Input Container */}
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-3 text-white/50" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search users..."
          aria-label="Search users"
          className="w-full h-12 pl-10 pr-4 text-white bg-white/10 
            border border-white/20 rounded-xl
            focus:outline-none focus:border-purple-500 
            focus:ring-2 focus:ring-purple-500/30
            placeholder-white/50 transition-all duration-300"
        />

        {/* Clear Button - Shows when there's input */}
        <button
          type="button"
          aria-label="Clear search"
          title="Clear search"
          className="absolute right-3 text-white/50 hover:text-white/75 
            transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;


