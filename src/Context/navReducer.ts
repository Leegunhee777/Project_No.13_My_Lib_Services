import { ActionType } from './GlobalContextProvider'

export type NavBarType = {
    isOpen: boolean;
    validPath: boolean;
}

const navBarInitState = {
    isOpen: false,
    validPath: false
}
const navBarReducer = (state: NavBarType, action: ActionType) => {

    switch(action.type){
        case "CHANGE_OPEN_STATUS":
            return {
                ...state,
                isOpen: action.payload
            }
        case "CHANGE_PATH_VALIDATEION":
            return {
                ...state,
                validPath: !state.validPath
            }
        default:
            throw new Error()
    }
}

export { navBarInitState, navBarReducer }
