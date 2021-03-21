

export const postsLikeReducer = (state = {

}, action) => {
    switch(action.type){
        case 'LIKE':
            return {
                ...state,
                [action.id]: true,
        }

         case 'DISLIKE':
             return {
                 ...state,
                 [action.id]: false,
        }

        case 'RESET':
        return {}     
                
        default:
            return state;
    }
}