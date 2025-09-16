import { createContext, useContext, useState } from "react";

const BulbContext = createContext();

export function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider>{children}</BulbContext.Provider>;
}

function App() {
  <div>
    <BulbProvider>
      <Light /> // children
    </BulbProvider>
  </div>;
}

function Light({ bulbOn, setBulbOn }) {
  return (
    <div>
      <LightBulb bulbOn={bulbOn} />
      <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function LightSwitch({ bulbOn, setBulbOn }) {
  function toggle() {
    setBulbOn(!bulbOn);
  }

  return (
    <div>
      <button onClick={toggle}> Toggle the bulb</button>
    </div>
  );
}

export default App;
