export const INCREMENT = 'INCREMENT'//type для диспатча в саге
export const DECREMENT = 'DECREMENT'//type для диспатча в саге
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT' //type для диспатча в UI
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT' //type для диспатча в UI

const initialState = {
    count: 0
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };

        default:
            return state;
    }

}
export const incrementCreator = () => ({ type: INCREMENT })//action для диспатча в саге
export const decrementCreator = () => ({ type: DECREMENT })//action для диспатча в саге
export const asyncIncrementCreator = () => ({ type: ASYNC_INCREMENT })//action для диспатча в UI
export const asyncDecrementCreator = () => ({ type: ASYNC_DECREMENT })//action для диспатча в UI

export default testReducer;


