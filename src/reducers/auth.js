const initAuthState={
	isLoing:false,
	user:{
		username:null
	}
}
const auth = (state=initAuthState,action)=>{
	switch(action.type){
		case 'LOGIN_STATE':
			return {...state, isLoing:action.payload}
		
		case 'USERNAME':
			return {...state, user:{...state.user, username:action.payload}}
		default:
			return state;
	}
}

export default auth;