// import { useFetch } from "./hooks/useFetch";
import { useState } from "react";
import usePrev from "./hooks/usePrev";


function App() {
 const [state, setState] = useState(0);
 const prev = usePrev(state); // 0

  return (
    <>
    <p>{state}</p>
    <button onClick={() => setState(curr => curr+1)}>CLick Me</button>
    <p>Ths previous value was {prev}</p>
      
    </>
  );

}

export default App;
