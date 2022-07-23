import MeetupItem from "./MeetUpItem";
import classes from "./MeetUpList.module.css";

function MeetupList(args) {
  return (
    <ul className={classes.list}>
      {args.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          description={meetup.description}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
