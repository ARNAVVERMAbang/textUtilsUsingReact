import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearText = () => {
    setText(" ");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  let timeToReadInMinutes = text.split(" ").length * 0.008;
  let timeToReadInSeconds = text.split(" ").length * 0.008 * 60;

  return (
    <>
      <div className="mb-3 my-5 container">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder={props.TextAreaPlaceHolder}
          value={text}
          onChange={handleOnChange}
        ></textarea>

        <button className="btn btn-danger my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-danger my-2 m-lg-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-danger mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>

      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {" "}
          {text.split(" ").length} words & {text.length} characters
        </p>
        <h1 className="my-3">Time to read</h1>
        <p>
          {" "}
          {timeToReadInMinutes.toFixed(2)} Minutes /{" "}
          {timeToReadInSeconds.toFixed(2)} Seconds
        </p>
        <h3>preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
  console.log(text);
}
