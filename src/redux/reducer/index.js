import * as actions from "../../actions/actionTypes"

let lastId = 1

export function postList(state = [], action) {
    switch (action.type) {
        case actions.CREATE_POST:
            return [...state, {...action.post, id: lastId++}]
        case actions.EDIT_POST:
            //const newState = [...state.filter(post => post.id !== action.post.id)]
            //return [{...action.post}, ...newState]
            return [...state.map(post => post.id === action.post.id ? {...action.post} : post)]
        case actions.DELETE_POST:
            return [...state.filter(post => post.id !== action.id)]
        default:
            return state
    }
    
}

export const loggedIn = (state = null, action) => {
    switch(action.type) {
        case actions.USER_LOGIN:
            return action.username
        case actions.USER_LOGOUT:
            return null
        default:
            return state
    }
}
