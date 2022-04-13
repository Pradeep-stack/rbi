import * as types from '.././actions/index';

const initialState = {
    user:[]
};

const loginReducers = (state = initialState, action)=>{
    switch (action.type){
        case "LOGIN" : 
        const {data} = action.payload;
        return{
            ...state,
            user:[
                ...state.user,
                 {
                    data:data
                }
            ]
        }
        default :return state;
           
        }
      
    }


export default loginReducers;