import * as types from './mutations_types'

export default{
    [types.UPDATE_DB](state,shop){
        state.activeList = shop;
    },
}