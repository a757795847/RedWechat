import * as types from './mutations_types';

export default {
    update_db:({commit},shop)=>{
        commit(types.UPDATE_DB,shop)
    }
}