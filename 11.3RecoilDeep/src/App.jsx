import {RecoilRoot, atom, useRecoilValue} from 'recoil'

const todoAtom = atom({
  key: "todoAtom",
  default: {
    id: 1,
    title: "Go to gym",
    description: "Hit the gym from 7-9"
  }
})

function App() {
  
  return(
    <>
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
    </RecoilRoot>  
    </>
  )
}


function Todo(){
  const currentTodo = useRecoilValue(todoAtom);
  <>
  {currentTodo.title}
  {currentTodo.description}
    </>
}


export default App;