import ACTIONS from '../action/actionTypes'

const initialState = {
    users: [],
    usersError: null,
    isUsersLoading: false,

    user: null,
    userError: null,
    isUserLoading: false,

    isCreateUserLoading: false,
    createUserError: null,

    counter: 0,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ACTIONS.CREATE_USER_REQUEST: //запрос
            return {
                ...state,
                isCreateUserLoading: true,
                createUserError: null,
            };
        case ACTIONS.CREATE_USER_RESPONSE: // ответ
            return {
                ...state,
                users: action.users,
                isCreateUserLoading: false,
            } 
        case ACTIONS.CREATE_USER_ERROR: // ошибка
            return {
                ...state,
                isCreateUserLoading: false,
                createUserError: action.message,
            }; 

        case ACTIONS.GET_ALL_USERS_REQUEST:
            return {
                ...state,
                isUsersLoading: true,
                usersError: null,
            };
        case ACTIONS.GET_ALL_USERS_RESPONSE:
            return {
                ...state,
                users: action.users,
                isUsersLoading: false,
                
            };
        case ACTIONS.GET_ALL_USERS_ERROR:
            return {
                ...state,
                isUsersLoading: false,
                usersError: action.message,
            }; 

        case ACTIONS.GET_USER_BY_ID_REQUEST:
            return {
                ...state,
                isUserLoading: true,
                userError: null,
            }; 
        case ACTIONS.GET_USER_BY_ID_RESPONSE:
            return {
                ...state,
                isUserLoading: false,
                user: action.user,
            };
        case ACTIONS.GET_USER_BY_ID_ERROR:
            return {
                ...state,
                user: action.users,
                isUserLoading: false,
                
            }; 
            
        default: return state;
    }
}

// do not forget to register new reducer index.js file