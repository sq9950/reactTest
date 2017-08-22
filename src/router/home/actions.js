

export const HOME_ADD = 'HOME_ADD'
function _homeAdd(data){
	return {
		type:HOME_ADD
	}
}
export function homeAdd (params = {}) {
  // return dispatch => {
  //   dispatch(_homeAdd())
  // }
  return _homeAdd()
}