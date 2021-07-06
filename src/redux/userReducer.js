const SET_USER = 'SET_USER'
export const FETCH_USER = 'FETCH_USER'

const initialState = {
    users: [{
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
    }]
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: [...action.users]
            }
        default:
            return state;
    }
}

export const actionCreater = (users) => ({ type: SET_USER, users })
export const fetchActionCreater = () => ({ type: FETCH_USER })

export default userReduser