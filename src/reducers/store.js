import {compose,applyMiddleware} from 'redux'
import * as redux from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'
import {SUCCESS} from '../components/Login'

const initialState={
    isAuth:false
}

const validateReducer=(state=initialState,action)=>{
    if(action.type===SUCCESS){
            return {
                ...state,
                isAuth:true
            }
        }
        if(action.type==='SUBMIT'){
            debugger
            return{
                ...state,
                isAuth:true
            }
        }
        return state
    }
    
const rootReducer=redux.combineReducers({
    validate:validateReducer,
    form:formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=redux.createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export default store