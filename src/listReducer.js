export const listReducer = (initialState, action) => {

    switch(action.type){
        case 'Add':
            return[...initialState,action.payload];
        case 'Delete':
            return initialState.filter(list => list.id !== action.payload);
        case 'Complete':
            return initialState.map(list => {
                if(list.id === action.payload){
                    return{
                        ...list,
                        done: !list.done
                    }
                }
                return list;
            });
        case 'Update':
            return initialState.map(list => {
                if(list.id === action.payload.id){
                    return{
                        ...list,
                        nombre: action.payload.nombre,
                        description: action.payload.description,
                        caps:action.payload.caps
                    }
                }
                return list;
            });
        default:
            return initialState
        
    }

}