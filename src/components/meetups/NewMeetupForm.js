import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(args) {
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const meetupItem = {
      title: titleInput.current.value,
      image: imageInput.current.value,
      address: addressInput.current.value,
      description: descriptionInput.current.value,
    };
    args.onClick(meetupItem);
  }

  return (
    <section>
      <h1>Add a meetup</h1>
      <Card>
        <form className={classes.form} onSubmit = {submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" required id="title" ref={titleInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image URL</label>
            <input type="url" required id="image" ref={imageInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type="text" required id="address" ref={addressInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea required id="description" rows="5" ref={descriptionInput} />
          </div>
          <div className={classes.actions}>
            <button>Add meetup</button>
          </div>
        </form>
      </Card>
    </section>
  );
}

export default NewMeetupForm;
