import * as types from './actionType';
import axios from 'axios';
import dispatch from 'react-redux'

const getUsers = (users)=>({
    type: types.GET_USERS,
    payload : users
});

const userDeleted = () =>({
    type:types.DELETE_USER
})



// const userAdded = () =>({
//     type:types.ADD_USER
// })

// const editeUser = (user) =>({
//     type:types.EDITE_USER,
//     payload : user
// })

// const userUpdated = () =>({
//     type:types.UPDATE_USER
// })


export const loadUsers = ()=>{
    return function (dispatch){
        axios.get(`/users`)
        .then((res)=>{
            console.log("response", res);
            dispatch(getUsers(res.data))
        })
        .catch((error)=>console.log(error));
    }
}


export const deleteUser = (id)=>{
    return function (dispatch){
        axios.delete(`  /delete/${id}  `)
        .then((res)=>{
            console.log("response", res);
            dispatch(userDeleted());
            dispatch(loadUsers())
        })
        .catch((error)=>console.log(error));
    }
}

// export const addUser = (user)=>{
//     return function (dispatch){
//         axios.post(`  http://localhost:5000/user `,user)
//         .then((res)=>{
//             console.log("response", res);
//             dispatch(userAdded());
           
//         })
//         .catch((error)=>console.log(error));
//     }
// }


// export const editeSingleUser = (id)=>{
//     return function (dispatch){
//         axios.get(`  http://localhost:5000/user/${id}  `)
//         .then((res)=>{
//             console.log("response", res);
//             dispatch(editeUser(res.data));
//             // dispatch(loadUsers())
//         })
//         .catch((error)=>console.log(error));
//     }
// }


// export const updateUser = (user, id)=>{
//     return function (dispatch){
//         axios.put(`  http://localhost:6000/user/${id}  `,user)
//         .then((res)=>{
//             console.log("response", res);
//             dispatch(userUpdated());
//             // dispatch(loadUsers())
//         })
//         .catch((error)=>console.log(error));
//     }
// }

