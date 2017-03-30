export default function reducer(state={
		name : "",
		members : []
	}, 
	action) {
	switch (action.type) {
		case "FETCH_PER_GROUP_SUCCESS" : {
			return {...state, name : action.payload.name, members : action.payload.members, fetching: false}
		}
		case "FETCH_PER_GROUP_FAIL" : {
			return {...state, error : action.payload, fetching: false}
		}
		case "FETCH_STARTED" : {
			return {...state, fetching : true}
		}
		case "CLEAR_BIRTHDAYS" : {
			return {...state, name : "", members : []}
		}
	}
	return state
}