// import {atom, selector} from 'recoil'

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 103
// })

// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 0
// })

// export const notificationAtom = atom({
//     key: "notificationAtom",
//     default: 12
// })

// export const messagingAtom = atom({
//     key: "messagingAtom",
//     default: 0
// })



// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const messagingAtomCount = get(messagingAtom);
//         const notificationAtomCount = get(notificationAtom);

//         return networkAtomCount+jobsAtomCount+messagingAtomCount+notificationAtomCount
         
//     }
// })




import { atom, selector } from "recoil";
import axios from "axios";



export const notifications = atom({
    key: "networkAtom",
    default: selector({
       key: "networkAtomSelector",
       get: async () => {
        const res = await axios.get("https://google.com")
        return res.data;
       }
    })
});


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})