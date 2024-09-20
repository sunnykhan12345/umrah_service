import { useState, useRef, useEffect } from "react";
import { CiCalculator1 } from "react-icons/ci"; // Import the correct icon

export function RoomSelector() {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown to detect outside clicks

  // Room labels and types
  const roomLabels = ["0 rooms", "1 room", "2 rooms", "3 rooms", "4 rooms"];
  const roomTypes = ["Single", "Double", "Triple", "Quad", "Quint"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Increase the number of rooms
  const handleIncreaseRoom = () => {
    setSelectedRoom((prev) => Math.min(prev + 1, roomLabels.length - 1));
  };

  // Decrease the number of rooms
  const handleDecreaseRoom = () => {
    setSelectedRoom((prev) => Math.max(prev - 1, 0));
  };

  // Function to handle room selection
  const handleSelectRoom = (index) => {
    setSelectedRoom(index);
    setShowDropdown(false); // Close the dropdown after selection
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button" // Set the button type to prevent form submission
        className="text-sm capitalize flex items-center justify-between w-full h-11 border border-gray-300 hover:border-gray-400 text-gray-700 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-50"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <CiCalculator1 className="mr-2 text-blue-600 h-6 w-6" />
        {roomLabels[selectedRoom]}
      </button>

      {/* Dropdown options */}
      {showDropdown && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow mt-1">
          {/* Room adjustment section */}
          <div className="flex justify-between items-center p-2 border-b border-gray-200">
            <button
              type="button" // Set the button type to button to prevent reload
              className="flex-1 text-red-500 hover:text-red-600 font-bold text-lg"
              onClick={handleDecreaseRoom}
            >
              -
            </button>
            <span className="flex-1 text-center">
              {roomLabels[selectedRoom]}
            </span>
            <button
              type="button" // Set the button type to button to prevent reload
              className="flex-1 text-green-500 hover:text-green-600 font-bold text-lg"
              onClick={handleIncreaseRoom}
            >
              +
            </button>
          </div>

          {/* Room type options */}
          <ul className="p-2">
            {roomTypes.slice(0, selectedRoom + 1).map((type, index) => (
              <li
                key={index}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded"
                onClick={() => handleSelectRoom(index)}
              >
                <CiCalculator1 className="mr-2" />
                {type}
              </li>
            ))}
          </ul>

          {/* Confirm button */}
          <div className="text-center mt-2">
            <button
              type="button" // Set button type to button to prevent reload
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowDropdown(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
