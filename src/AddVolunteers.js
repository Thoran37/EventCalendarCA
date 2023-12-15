import React from "react";
import Modal1 from "./Modal1";
export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "block",
        padding: 30,
        margin: "auto",
      }}
    >
      <button type="button" onClick={handleOpen}>
        Add volunteers
      </button>
      <Modal1 isOpen={open}>
        <>
          <form>
            <label for="fname" className="text-dark">List the roll no.s:</label>
            <textarea id="volunteers" name="volunteers" rows="9" cols="25" />
            <br />
            <button onClick={handleClose}>Save</button>
          </form>
        </>
      </Modal1>
    </div>
  );
}