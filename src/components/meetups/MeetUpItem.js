import Card from "../ui/Card";
import classes from "./MeetUpItem.module.css";
function MeetupItem(args) {
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={args.image} alt={args.title} />
        </div>
        <div className={classes.content}>
          <h1>{args.title}</h1>
          <address>{args.address}</address>
          <p>{args.description}</p>
        </div>
        <div className={classes.actions}>
          <button>Add to favorites</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
