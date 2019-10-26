import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combinReducers } from 'redux'

const rootReducer = combinReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer