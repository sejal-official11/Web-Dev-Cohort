import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./store/atoms";
// import { useMemo } from "react";



function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);


//   const totalNotificationCount = useMemo(() => {
//     return networkNotificationCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
//   }, [networkNotificationCount , jobsAtomCount , notificationAtomCount , messagingAtomCount
// ])
  return(

    <>
    <button>Home</button>
    <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ({jobsAtomCount})</button>
    <button>Messaging ({messagingAtomCount})</button>
    <button >Notifications ({notificationAtomCount})</button>
    <button>Me ({totalNotificationCount})</button>
    </>
  )

}


export default App;