import {User} from "../state-interfaces/User";
import {UserAction} from "../actions/UserAction";
import {UserActionType} from "../action-types/UserActionType";

const initState: User[] = [];

const UserReducer = (state: User[] = initState, action: UserAction) => {
    switch (action.type) {
        case UserActionType.CREATE: {
            const stateDuplicate = state.slice();
            stateDuplicate.push(action.payload);
            return stateDuplicate;
        }
        case UserActionType.DELETE: {
            const stateDuplicate = state.slice();
            stateDuplicate.splice(action.payload, 1);
            return stateDuplicate;
        }
        case UserActionType.UPDATE: {
            const stateDuplicate = state.slice();
            stateDuplicate.splice(action.payload.userIndex, 1, action.payload.user);
            return stateDuplicate;
        }
        default:
            return state;
    }
}

export default UserReducer;