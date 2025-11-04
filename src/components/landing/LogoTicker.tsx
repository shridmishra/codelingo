'use client';
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { FaGoogle, FaAmazon, FaMicrosoft, FaUber } from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';

const icons = [
  { icon: <FaGoogle />, name: "Google" },
  { icon: <FaMeta />, name: "Meta" },
  { icon: <FaAmazon />, name: "Amazon" },
  { icon: <FaMicrosoft />, name: "Microsoft" },
  { icon: <FaUber />, name: "Uber" },
  { icon: <FaGoogle />, name: "Google" },
  { icon: <FaMeta />, name: "Meta" },
  { icon: <FaAmazon />, name: "Amazon" },
  { icon: <FaMicrosoft />, name: "Microsoft" },
  { icon: <FaUber />, name: "Uber" },
];

export const LogoTicker = ({ speed = 20 }: { speed?: number }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const maskImage = mounted ? `linear-gradient(to right, transparent, ${currentTheme === 'dark' ? 'white' : 'black'}, transparent)` : 'none';

  return <div className="py-8 bg-white dark:bg-black">
    <div className="container">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="sub-heading">Trusted by developers</p>
      </div>
      <div className="flex overflow-hidden mt-10" style={{ maskImage }}>
        <motion.div className="flex gap-14 flex-none pr-14" animate={{ translateX: "-50%" }} transition={{ duration: speed, repeat: Infinity, ease: "linear", repeatType: "loop" }} >
          {icons.map(({ icon, name }, index) => (
            <div key={index} className="flex items-center gap-4 text-2xl font-semibold text-gray-500 dark:text-gray-400">
              {icon}
              <span>{name}</span>
            </div>
          ))}
          {icons.map(({ icon, name }, index) => (
            <div key={index + icons.length} className="flex items-center gap-4 text-2xl font-semibold text-gray-500 dark:text-gray-400">
              {icon}
              <span>{name}</span>
            </div>
          ))}        </motion.div>
      </div>

    </div>

  </div>;
};