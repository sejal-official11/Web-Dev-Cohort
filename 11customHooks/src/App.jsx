// import { useFetch } from "./hooks/useFetch";
import { useState, useEffect } from "react";
// import usePrev from "./hooks/usePrev";

// import { useRef } from "react";

// function useDebounce(originalFn) {
//   const currentClock = useRef();

//   const fn = () => {
//     setTimeout(currentClock.current);
//     currentClock.current = setTimeout(originalFn, 200)
//   }

//   return fn;
// }
//

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

function App() {
  // function sendDataToBackend() {
  //   fetch("api.amazon.com/search/");
  // }

  // const debouncedFn = useDebounce(sendDataToBackend)
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 200);

  function change(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    console.log("expensive, operation");
  }, [debouncedValue]);

  return (
    <>
      <input type="text" onChange={change}></input>
    </>
  );
}

export default App;
