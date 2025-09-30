import { useRef, useEffect } from "react"


export default function usePrev(value){

    const ref = useRef(); 

    useEffect(() => {
         ref.current = value;  // update value  0
        //  console.log(ref.current);
    } ,[value])

    // console.log(ref.current);


    return ref.current; // undefined  pehle ye baad mein useEffect call hoga`


}


// it returns first , effect gets called later