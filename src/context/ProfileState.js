import { useReducer } from "react";
import profileReducer from "./profileReducer";
import ProfileContext from "./profileContext";


function ProfileProvider({ children }) {
    const initialState = {
        address: ""
    }
    const [state, dispatch] = useReducer(profileReducer, initialState);


    return (
        <ProfileContext.Provider
            value={{
                address: state.address,
            }}
        >
            {children}
        </ProfileContext.Provider>
    )

}

export { ProfileContext, ProfileProvider };