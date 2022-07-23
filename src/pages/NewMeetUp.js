import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const navigate = useNavigate();
  function addMeetuphandler(meetupData) {
    fetch(
      "https://react-routing-app-6d760-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/all-meetups");
    });
  }

  return <NewMeetupForm onClick={addMeetuphandler} />;
}

export default NewMeetUpPage;
