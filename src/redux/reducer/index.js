import * as actions from "../../actions/actionTypes"

let lastId = 1

export function postListReducer(state = [], action) {
    switch (action.type) {
        case actions.CREATE_POST:
            return [...state, {...action.post, id: lastId++}]
        case actions.EDIT_POST:
            return [...state.map(post => post.id === action.post.id ? {...action.post} : post)]
        case actions.DELETE_POST:
            return [...state.filter(post => post.id !== action.id)]
        default:
            return state
    }
    
}

const initialState = {
    loggedIn: false,
    username: undefined
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.USER_LOGIN:
            return {
                loggedIn: true,
                username: action.username
            }
        case actions.USER_LOGOUT:
            return {
                loggedIn: false,
                username: undefined
            }
        default:
            return state
    }
}
