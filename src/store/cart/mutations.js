import * as types from './mutations_types'

export default{
    [types.UPDATE_DB](state,shop){
        state.activeList = shop;
    },
    [types.UPDATE_USER_IMG](state,img){
        state.userImg = img;
    },
    [types.ADD_APP_LIST](state,app){
        state.appList.push(app);
        var list = JSON.parse(localStorage.getItem('jurisdiction'));
        if(list.indexOf(app.abbreviation) == -1){
            list.push(app.abbreviation)
        }
        localStorage.setItem('jurisdiction',JSON.stringify(list))
    },
    [types.DELETE_APP_LIST](state,app){
        state.appList.map((elem,index)=>{
            if(elem.id == app.id){
                state.appList.splice(index,1)
            }
        })
        var list = JSON.parse(localStorage.getItem('jurisdiction'));
        if(list.indexOf(app.abbreviation) != -1){
            list.splice(list.indexOf(app.abbreviation),1)
        }
        localStorage.setItem('jurisdiction',JSON.stringify(list))
    },
    [types.EMPTY_APP_LIST](state){
        state.appList = [];
    },
}