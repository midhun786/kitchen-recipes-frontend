import { createContext, useState } from "react";

let UserContext = createContext();



export const UserProvider =({children}) => {
    const[username,setUsername] = useState("");
    const[profile,setProfile]=useState([]);

    return (
        <UserContext.Provider value={{username,setUsername,profile,setProfile}}>
            {children}
        </UserContext.Provider>
    )
}





export default UserContext;