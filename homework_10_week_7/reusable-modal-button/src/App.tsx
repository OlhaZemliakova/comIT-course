import "./App.css";
import MyCustomDialog from "./components/MyCustomDialog";
import { useState, useRef } from "react";
import Button from "./components/Button";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const buttonRef = useRef(null);

  function showDialogHandler() {
    setOpenModal(true);
  }

  function closeDialog() {
    setOpenModal(false);
  }

  function handleClick() {
    alert("You clicked button");
  }
  return (
    <div className="wrapper">
      <MyCustomDialog
        onClose={closeDialog}
        isOpen={openModal}
        children={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            officia ullam, fugit expedita voluptatum, adipisci itaque omnis ea
            tempore doloribus molestiae delectus asperiores nulla, totam non
            illo libero exercitationem quidem.
          </p>
        }
      />
      <button onClick={showDialogHandler}>Show dialog</button>
      <div className="buttonsContainer">
        <Button onClick={handleClick}>Click Me</Button>

        <Button as="a" href="https://example.com">
          Go to Site
        </Button>

        <Button ref={buttonRef}>With Ref</Button>
      </div>
    </div>
  );
}

export default App;
