import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddNewGuest() {
    if (inputValue.trim() !== "") {
      setGuests([...guests, inputValue]);
      setInputValue("");
    }
  }

  function handleRemoveGuest(indexToDelete) {
    setGuests((guests) => {
      return guests.filter((_, index) => index !== indexToDelete);
    });
  }

  function handleClearAllGuests() {
    setGuests([]);
  }

  const sortedGuests = [...guests].sort((a, b) => a.localeCompare(b));

  return (
    <div className="guestCard">
      <h1>Guest List application:</h1>
      <label htmlFor="guestName">
        <input
          onChange={handleInputChange}
          value={inputValue}
          type="text"
          name="guestName"
        />
      </label>
      <button onClick={handleAddNewGuest}>Add guest</button>
      {guests.length > 0 ? (
        <ul>
          {sortedGuests.map((guest, index) => (
            <li key={index}>
              {guest}
              <button onClick={() => handleRemoveGuest(index)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your list of guests is empty so far...</p>
      )}

      <button onClick={handleClearAllGuests}>Clear all guests</button>
    </div>
  );
}

export default App;
