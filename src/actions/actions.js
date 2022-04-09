import * as actions from "./actionTypes"

export const createPost = post => ({type: actions.CREATE_POST, post })
export const editPost = post => ({type: actions.EDIT_POST, post })
export const deletePost = id => ({type: actions.DELETE_POST, id })

export const userLogin = username => ({type: actions.USER_LOGIN, username })
export const userLogout = () => ({type: actions.USER_LOGOUT })


