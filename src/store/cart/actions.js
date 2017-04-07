import * as types from './mutations_types';

export default {
    update_db:({commit},shop)=>{
        commit(types.UPDATE_DB,shop)
    },
    update_user_img:({commit},img)=>{
        commit(types.UPDATE_DB,img)
    }
}