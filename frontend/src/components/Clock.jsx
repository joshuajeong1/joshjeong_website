import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, CloudIcon } from '@heroicons/react/24/solid';
import { Canvas } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

const Clock = ({ timezone = "America/Phoenix" }) => {
  const [time, setTime] = useState("");
  const [isDay, setDay] = useState(true);
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
      setDay(now.getHours() >= 7 && now.getHours() <= 19);
    };


    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  useEffect(() => {
      const interval = setInterval(() => {
        const hour = new Date().getHours();
        setDay(hour >= 7 && hour <= 19);
      }, 60000)
      return () => clearInterval(interval)
    }, [])


  return (
    <div className={`${isDay ? 'bg-gradient-to-b from-sky-400 via-sky-200 to-sky-50' : 'bg-gray-900'} rounded-md relative`}>
      <div className="absolute w-full">
        {isDay ? (<SunIcon className="relative top-1/3 xl:left-3/5 left-3/5 h-16 w-16 lg:h-25 lg:w-25 text-yellow-400 animate-[spin_25s_linear_infinite]"/>) : (<MoonIcon className="relative top-10 left-10 h-16 w-16 text-gray-400"/>)}
      </div>
      <div className="relative top-1/4 text-white text-sm md:text-2xl font-mono flex flex-col justify-center items-center h-full">
          <p className={`${isDay ? 'text-black drop-shadow-lg' : 'text-white'} text-center`}>For me, it is currently</p>
          <p className={`${isDay ? 'text-black drop-shadow-lg' : 'text-white'}`}>{time}</p>
          <p className="text-gray-400">(Phoenix/MST)</p>
      </div>
      <div className="absolute inset-0 z-0">
        {!isDay && (
        <Canvas>
          <Stars radius={50} count={1000} factor={2} fade speed={1}/>
        </Canvas>
        )}
        {isDay && (
          <>
          <div className="relative w-full h-full">
            <CloudIcon className="absolute left-2/5 top-5 h-20 xl:h-32 text-white"/>
            <CloudIcon className="absolute left-1/8 top-15 h-20 xl:h-32 text-white" />
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Clock;