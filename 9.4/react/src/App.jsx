
const App = () => {
  return (
    <div>
      {[
        <Todo key={2} title={"Eat food"} done={false} />
        ,
        <Todo key={1} title={"Go to Gym"} done={false} />
      ]}
    </div>
  )
  
}


function Todo({title, done}) {
  return <div>
    {title} - {done ? "Done" : "Not done"}
  </div>
}

export default App;
