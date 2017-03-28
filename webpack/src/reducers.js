export default function reducer(state={
		name : "",
		members : []
	}, 
	action) {
	switch (action.type) {
		case "FETCH_PER_GROUP_SUCCESS" : {
			return {...state, name : action.payload.name, members : action.payload.members}
		}
		case "FETCH_PER_GROUP_FAIL" : {
			return {...state, error : action.payload}
		}
	}

	return state
}