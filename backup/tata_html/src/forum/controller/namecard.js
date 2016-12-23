'use strict';

import Base from './base.js';
//实例化数据库,qingyun_data调取用户数据,qingyun_oam调用oam数据
let qingyun_data = gettatadb('qingyun_account');

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        //auto render template file index_index.html
        let userid = this.get('userid');
        let user_info = this.model('user_info',qingyun_data);  //实例化地推用户的表
        let data = await user_info.where({userid: userid}).find();
        let tataid = gettataid(userid,10);
        console.log(tataid);
        this.assign({
            tataid: tataid,
            nickname: data.nickname,
            sex:data.sex,
            avatar: data.avatarurl
        });
        return this.display();
    }

    downloadAction(){
        return this.display()
    }


    panduanAction() {
        //auto render template file index_index.html
        return this.display();
    }


}