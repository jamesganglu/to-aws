const auth = (state={},action)=>{
	switch(action.type){
		case 'LOGIN_STATE':
			return {...state, message:action.payload}
		default:
			return state;
	}
}

export default auth;