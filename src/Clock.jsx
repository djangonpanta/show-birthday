import React, { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <div className="clock">
      <h3>{ctime}</h3>
    </div>
  );
};

export default Clock;
