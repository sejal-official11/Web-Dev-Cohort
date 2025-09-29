// import { useEffect, useState } fsrom "react";
import { usePostTitle } from "./hooks/useFetch";


  function App() {
  const postTitle = usePostTitle();
  
  return (
    <div>
      {postTitle} HI there
    </div>
  )
}



export default App;
