import Axios from 'axios'

export function getBirthdayForGroup(name) {
	return function(dispatch) {
		dispatch({type: "FETCH_STARTED"})
		Axios.get('data/birthday.json')
			 .then((response) => {
			 	dispatch({type: "FETCH_PER_GROUP_SUCCESS", payload: response.data[name]})
			 })
			 .catch((error) => {
				dispatch({type: "FETCH_PER_GROUP_FAIL", payload: error})
			 });
	}
}