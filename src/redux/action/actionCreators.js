import action from './actionTypes'

export const getAllUsersAction = () => ({
    type: action.GET_ALL_USERS
});

export const getUserByIDAction = (id) => ({
    type: action.GET_USER_BY_ID,
    id: id
    // we can try wright id
});

export const createUserAction = (userBody) => ({
    type: action.CREATE_USER,
    userBody,
});

