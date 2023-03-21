import { useState, useEffect, useRef } from "react";

const TypeWriter = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const index = useRef(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentText((value) => {
        console.log("value", value);
        const asd = value + text.charAt(index.current);
        console.log("qwe", asd);
      });
      index.current += 1;
      console.log("asd", index.current);
      console.log("text", text.length);
      if (index.current === text.length) {
        const restartTimeout = setTimeout(() => {
          setCurrentText("");
          index.current = -1;
        }, 2000);
        return () => {
          clearTimeout(restartTimeout);
        };
      }
    }, 600);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, text]);

  return <p style={{ margin: 0, padding: 0 }}>{currentText}</p>;
};

export default TypeWriter;
