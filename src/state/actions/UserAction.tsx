import {CartActionType} from "../action-types/CartActionType";
import {User} from "../state-interfaces/User";
import {UserActionType} from "../action-types/UserActionType";

interface CreateAction {
    type: UserActionType.CREATE,
    payload: User
}

interface DeleteAction {
    type: UserActionType.DELETE,
    payload: number
}

interface UpdateAction {
    type: UserActionType.UPDATE,
    payload: {
        userIndex: number,
        user: User
    }
}

export type UserAction = CreateAction | DeleteAction | UpdateAction;