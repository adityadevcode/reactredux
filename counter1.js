const counterReducer1 = (state = 0, action) => {
    switch(action.type){
       case 'DECREMENT':
                return state - 1;
                default:
                    return state;
    }
};

export default counterReducer1;

