import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] =
    useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete your feedback?"
      )
    ) {
      setFeedback(
        //filter through array of feedbacks and bring back the ones, which ids are not
        //same as the id passed to the function (the one where onClick event was fired)
        feedback.filter((item) => item.id !== id)
      );
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
}

export default App;
