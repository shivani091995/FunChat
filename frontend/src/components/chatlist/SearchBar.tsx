import { useState, useEffect, useRef } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { toast } from "react-hot-toast";

interface ConversationType {
  id: string;
  fullName: string;
  profilePic: string;
  emoji: string;
}

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredConversations, setFilteredConversations] = useState<ConversationType[]>([]);
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter conversations when search term changes
  useEffect(() => {
    if (search.length >= 1) {
      const filtered = conversations.filter((c: ConversationType) =>
        c.fullName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredConversations(filtered);
      setShowDropdown(true);
    } else {
      setFilteredConversations([]);
      setShowDropdown(false);
    }
  }, [search, conversations]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c: ConversationType) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
      setShowDropdown(false);
    } else toast.error("No such user found!");
  };

  const handleSelectUser = (conversation: ConversationType) => {
    setSelectedConversation(conversation);
    setSearch("");
    setShowDropdown(false);
  };

  const handleClear = () => {
    setSearch("");
    setShowDropdown(false);
    setSelectedConversation(null);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <form onSubmit={handleSubmit}>
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            minLength={3}
          />

          {/* Clear Button */}
          {search && (
            <button
              type="button"
              onClick={handleClear}
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
          )}
        </div>
      </form>

      {/* Dropdown Results */}
      {showDropdown && filteredConversations.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {filteredConversations.map((conversation, index) => (
            <div
              key={index}
              onClick={() => handleSelectUser(conversation)}
              className="px-4 py-3 flex items-center gap-3 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
            >
              {conversation.profilePic && (
                <img
                  src={conversation.profilePic}
                  alt={conversation.fullName}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-white">{conversation.fullName}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
