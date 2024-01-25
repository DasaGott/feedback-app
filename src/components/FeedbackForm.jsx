import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextInput = (event) => {
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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
