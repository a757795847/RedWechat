import * as types from './mutations_types'

export default{
    [types.UPDATE_DB](state,shop){
        state.activeList = shop;
    },
    [types.UPDATE_USER_IMG](state,img){
        state.userImg = img;
    },
}