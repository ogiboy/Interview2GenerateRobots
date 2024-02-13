import { useContext } from "react";

import RobotsContext from "../context/robots";

const RobotList = () => {
  const { robots, handleDelete } = useContext(RobotsContext);

  return (
    <div className="robots-container">
      <h2 className="list-heading">Robot List</h2>
      <div className="robot-list">
        {robots &&
          robots.map((robo) => (
            <figure onClick={() => handleDelete(robo.id)} key={robo.id}>
              <img src={robo.img} alt={robo.name} />
              <figcaption>
                <p>
                  Name: <span style={{ color: "#444" }}>{robo.name}</span>
                </p>
                <p>
                  Serial Number:{" "}
                  <span style={{ color: "#444" }}>
                    {robo.id.slice(-5).padStart(15, "*")}
                  </span>
                </p>
              </figcaption>
            </figure>
          ))}
      </div>
    </div>
  );
};

export default RobotList;
