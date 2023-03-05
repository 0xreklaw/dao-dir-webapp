import { createContext } from "react";
import { ProfileState } from "@/interfaces/profile";

const ProfileContext = createContext<ProfileState>({} as ProfileState);

export default ProfileContext;