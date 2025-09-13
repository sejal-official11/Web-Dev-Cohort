function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{display: "flex"}}>
      {/* <Card children={<div style={{color: "green"}}> 
        What do you want to post
        <input type={"text"} />
      </div>} /> */}
      <Card>
        <div style={{color: "green"}}> 
        What do you want to post
        <input type={"text"} />
      </div>
      </Card>

      <Card children={"hi there"} />
    </div>
  );
}

function Card({ children }) {
  return (
    <span
      style={{
        background: "grey",
        borderRadius: 10,
        color: "white",
        padding: 10,
        margin: 10
      }}
    >

      Upper topbar
      {children}
      Lower bottom footer
    </span>
  );
}

export default App;
