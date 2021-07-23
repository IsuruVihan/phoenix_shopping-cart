import {Dispatch} from "redux";
import {User} from "../state-interfaces/User";
import {UserActionType} from "../action-types/UserActionType";
import {UserAction} from "../actions/UserAction";

export const CreateUser = (user: User) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.CREATE,
            payload: user
        });
    }
}

export const RemoveUser = (userIndex: number) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.DELETE,
            payload: userIndex
        });
    }
}

export const UpdateUser = (userIndex: number, user: User) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.UPDATE,
            payload: {userIndex, user}
        });
    }
}