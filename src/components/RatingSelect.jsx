import { useState } from "react";

function RatingSelect({ select }) {
  //we have to add piece of state that represents which number is selected
  const [selected, setSelected] = useState(10);

  const handleChange = (event) => {
    //initially, event.currentTarget.value was string, it was needed to transform to number otherwise the number wasnt
    //marked as selected - therefore we added + sign to transform string to number
    setSelected(+event.currentTarget.value);
    //select is props which goes to the feedbackform, but it is function. thats why it was not enough only pass props to the
    //RatingSelect, but we had to include it here as well.
    select(+event.currentTarget.value);
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ul className="rating">
      {numbers.map((number, idx) => (
        <li key={idx}>
          <input
            type="radio"
            id={`num${number}`}
            name="rating"
            value={number}
            onChange={handleChange}
            checked={selected === number}
          />
          <label htmlFor={`num${number}`}>
            {number}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
