import * as types from './mutations_types';

export default {
    update_db:({commit},shop)=>{
        commit(types.UPDATE_DB,shop)
    },
    update_user_img:({commit},img)=>{
        commit(types.UPDATE_USER_IMG,img)
    },
    add_app_list:({commit},app)=>{
        commit(types.ADD_APP_LIST,app)
    },
    delete_app_list:({commit},app)=>{
        commit(types.DELETE_APP_LIST,app)
    }
}