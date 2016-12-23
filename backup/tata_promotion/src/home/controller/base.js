'use strict';


//实例化数据库,qingyun_data调取用户数据,qingyun_oam调用oam数据
let qingyun_data = gettatadb('qingyun_account');
let qingyun_oam = gettatadb('qingyun_oam');

export default class extends think.controller.base {
    /**
     * some base method in here
     */



    async __before() {
        //部分 action 下不检查
        //  console.log('进入base');
        let blankActions = ["login", "logincheck"];
        //let blankActions2 = ["logincheck"];
        let ay = blankActions.indexOf(this.http.action);
        //console.log('action:',this.http.action);
        //console.log('indexof:',ay);
        if (blankActions.indexOf(this.http.action) >= 0) {
            //console.log('进入判断');
            return;
        }


        //获取session,{ id: 5,agent_phone: '18515999883',password: 'fef2693e737827b1b1f55b463fdf5bf4',level: 3,name: 'songxin',alipay: null,area: null,university_id: 6,addtime: 1462433297 }
        let userInfo = await this.session("userInfo");
        console.log('当前登录账户为:',JSON.stringify(userInfo));



        //判断 session 里的 userInfo
        if (think.isEmpty(userInfo)) {
            return this.redirect("/index/login");
        }

        let agent_level = '初级经理';
        if(userInfo.level == 1){
            agent_level = '高级经理';
        }else if(userInfo.level == 2){
            agent_level = '省主管';
        }else if(userInfo.level == 3){
            agent_level = '管理员';
        }

        this.assign({
            agent_level : agent_level,
            agent_name : userInfo.name,
            agentinfo: userInfo
        });


        //console.log('未进入判断');

    }

}