const GenderCheckbox = ({
    selectedGender,
    onCheckboxChange,
  }: {
    selectedGender: string;
    onCheckboxChange: (gender: "male" | "female") => void;
  }) => {
    return (
      <div className="flex gap-4">
        {/* Added gap between checkboxes */}
        <div className="form-control">
          <label
            className={`label gap-4 cursor-pointer hover:opacity-80 transition ${
              selectedGender === "male" ? "selected" : ""
            }`}
          >
            <span className="label-text text-white pr-2">Male</span>
            <input
              type="checkbox"
              className="w-4 h-4 rounded-md border border-gray-400 
                  checked:bg-blue-500 checked:border-blue-500
                  transition-all duration-200 ease-in-out
                  cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-200
                  appearance-none"
              checked={selectedGender === "male"}
              onChange={() => onCheckboxChange("male")}
            />
          </label>
        </div>
        <div className="form-control">
          <label
            className={`label gap-2 cursor-pointer hover:opacity-80 transition ${
              selectedGender === "female" ? "selected" : ""
            }`}
          >
            <span className="label-text text-white pr-2">Female</span>
            <input
              type="checkbox"
              className="w-4 h-4 rounded-md border border-gray-400 
                  checked:bg-blue-500 checked:border-blue-500
                  transition-all duration-200 ease-in-out
                  cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-200
                  appearance-none"
              checked={selectedGender === "female"}
              onChange={() => onCheckboxChange("female")}
            />
          </label>
        </div>
      </div>
    );
  };
  
  export default GenderCheckbox;
  