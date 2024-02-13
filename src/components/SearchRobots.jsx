import { useContext } from "react";
import RobotsContext from "../context/robots";
import RobotList from "./RobotList";
import Greeting from "./Greeting";

const SearchRobots = () => {
  const { robots, text, setText, handleForm } = useContext(RobotsContext);

  return (
    <div className="form-container">
      <form onSubmit={handleForm}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          pattern="[a-zA-Z0-9]+"
          title="Only alphanumeric characters are allowed."
          required
          placeholder="Generate Robot"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
      <br />
      <hr />
      {robots.length > 0 ? <RobotList /> : <Greeting />}
    </div>
  );
};

export default SearchRobots;
