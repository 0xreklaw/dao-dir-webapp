export interface ProfileState {
    address: string;
}

export interface ProfileAction {
    type: string;
    payload: Partial<ProfileState>;
}