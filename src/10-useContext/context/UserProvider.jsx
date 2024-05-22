import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//     id: 25570244,
//     name: 'Ariel Gonzalez',
//     email: 'rusitogon@gmail.com'
// }

export const UserProvider = ( { children }) => {
    const [user, setUser ] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
