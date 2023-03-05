import { ProfileState, ProfileAction } from "@/interfaces/profile";

function profileReducer(state: ProfileState, action: ProfileAction): ProfileState {
    switch (action.type) {
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export default profileReducer;