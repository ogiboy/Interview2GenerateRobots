import axios from "axios";
import { createContext, useState } from "react";

const RobotsContext = createContext();

const Provider = ({ children }) => {
  const [text, setText] = useState("");
  const [robots, setRobots] = useState([]);

  const fetchRobots = async () => {
    try {
      const response = await axios.get(`https://robohash.org/${text}`, {
        responseType: "arraybuffer"
      });
      const imgData = Buffer.from(response.data).toString("base64");
      const imgSrc = `data:image/png;base64,${imgData}`;

      const robotName = text.toLowerCase();

      if (isRobotAlreadyThere(robotName)) {
        alert("Robot is already in the list!");
      } else {
        setRobots((prevRobots) => [
          ...prevRobots,
          { id: crypto.randomUUID(), img: imgSrc, name: robotName }
        ]);
      }
    } catch (error) {
      console.warn("Error fetching robots:", error);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    fetchRobots();
    setText("");
  };

  const handleDelete = (id) => {
    setRobots((prevRobots) => prevRobots.filter((robo) => robo.id !== id));
  };

  const isRobotAlreadyThere = (name) => {
    return robots.some((robot) => robot.name === name);
  };

  const valuesToShare = { text, setText, handleForm, robots, handleDelete };

  return (
    <RobotsContext.Provider value={valuesToShare}>
      {children}
    </RobotsContext.Provider>
  );
};

export { Provider };
export default RobotsContext;
