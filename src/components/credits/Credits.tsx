import { contStyles, creditStyles, creditTitleStyles } from "./Credits.css";

const Credits = () => {
  return (
    <div className={creditStyles}>
      <div className={creditTitleStyles}>how & who</div>
      <div className={contStyles}>
        <b>How to play:</b> <br />
        Progress from level to level. Become more than strangers, one card at a time.
        <p>Refresh to reset card decks.</p>{" "}
        <p>
          Made by <a href="https://instagram.com/jdyjuanco">@jdyjuanco</a>.
        </p>
      </div>
    </div>
  );
};

export default Credits;
