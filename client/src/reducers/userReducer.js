import * as types from '.././actions/actionType';

const initialState = {
    users: [],
    user :{},
    loading: true,
};

const usersReducers = (state = initialState, action)=>{
    switch (action.type){
        case types.GET_USERS: return{
            ...state,
            users: action.payload,
            loading: false,
        }
        // case types.DELETE_USER:
        //     case types.ADD_USER: 
        //     case types.UPDATE_USER: 
        //     return{
        //     ...state,
        //     loading:false,
        // }  
        // case types.EDITE_USER: return{
        //     ...state,
        //     user:action.payload,
        //     loading:false,
        // }
        default: return state;
    }
}

export default usersReducers;