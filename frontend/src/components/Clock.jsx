import { useEffect, useState } from "react";

const Clock = ({ timezone = "America/Phoenix" }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: timezone,
      });
      setTime(formatter.format(now));
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <div className="text-white text-2xl font-mono flex flex-col justify-center items-center h-full">
        <p>For me, it is currently</p>
        <p>{time}</p>
        <p class="text-gray-500">(Phoenix/MST)</p>
    </div>
  );
};

export default Clock;