import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] =
    useState(true);
  const [message, setMessage] = useState("");

  const handleTextInput = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (
      text != "" &&
      text.trim().length < 10
    ) {
      setBtnDisabled(true);
      setMessage(
        "Text has to be at least 10 characters long"
      );
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(event.target.value);
  };

  return (
    <Card>
      <form>
        <h2>Please leave a review</h2>
        {/*doplnit radio buttons*/}
        <div className="input-group">
          <input
            onChange={handleTextInput}
            type="text"
            placeholder="Write a review"
            value={text}
          ></input>
          <Button
            type="submit"
            isDisabled={btnDisabled}
          >
            Send
          </Button>
        </div>
        {message && (
          <div className="message">{message}</div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;
