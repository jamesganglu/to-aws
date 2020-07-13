const initAuthState={
	isLoing:false,
	user:null
}
const auth = (state=initAuthState,action)=>{
	switch(action.type){
		case 'LOGIN_STATE':
			return {...state, isLoing:action.payload}
		default:
			return state;
	}
}

export default auth;