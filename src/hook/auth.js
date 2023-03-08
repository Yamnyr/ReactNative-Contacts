import { useEffect, useReducer } from "react";



    export function reducer(state, action) {
        console.log(action)
        switch (action.type) {
            case 'SET_JWT':
                return {...state,jwt:action.jwt};
            default:
                throw new Error();
        }
    }
