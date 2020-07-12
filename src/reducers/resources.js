const INIT_RESOURSE_STATE = {
	photo:null,
	posts:null,
	selectedPost:null
}
const resources = (state = INIT_RESOURSE_STATE ,action)=>{
	switch (action.type){
		case 'photo':
			return {...state, photo:action.payload}
		case 'posts':
			return {...state, posts:action.payload}
		case 'selectedPost':
			return {...state, selectedPost:action.payload}
		default:
			return state;
	}
}

export default resources;