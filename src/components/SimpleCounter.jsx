import { useState, useEffect } from 'react';

const SimpleCounter = ({ end, text, isVisible = true, duration = 2.5 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span>{count}{text}</span>;
}; 

export default SimpleCounter;