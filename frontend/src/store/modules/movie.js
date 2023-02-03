import axios from "axios";

const state={
    team:[
        {name:"The net ninja",role:"web developer",avatar:"/DUNE.jpg"},
        {name:"ryu",role:"web designer",avatar:"/download.jpg"},
        {name:"chun li",role:"graphics mavrik",avatar:"/puss_in_boots.jpg"},
        {name:"The net ninja",role:"web developer",avatar:"/DUNE.jpg"},
        {name:"ryu",role:"web designer",avatar:"/download.jpg"},
        {name:"chun li",role:"graphics mavrik",avatar:"/puss_in_boots.jpg"}
        ],
}

const getters = {
    allTeams : (state)=>state.team

}

const actions={}

const mutations = {}

export default{
    state,
    getters,
    actions,
    mutations
}