'use strict';

import Base from './base.js';


//实例化数据库,qingyun_data调取用户数据,qingyun_oam调用oam数据
let qingyun_data = gettatadb('qingyun_account');
let qingyun_oam = gettatadb('qingyun_oam');



export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        //auto render template file index_index.html
        let doulian_visit = this.model('doulian_visit',qingyun_oam);  //实例化地推用户的表
        let doulian_season = this.model('doulian_season',qingyun_oam);  //实例化地推用户的表
        let doulian_source = this.model('doulian_source',qingyun_oam);  //实例化地推用户的表
        let doulian_vote = this.model('doulian_vote',qingyun_oam);  //实例化地推用户的表

        let sesonnum = this.get('season'); //获取当前是第几期
        let getuserid = this.get('userid').toString(); //获取userid 并变成字符串
        let userarr = getuserid.split(','); //将userid组成数组
        let userid = userarr[0]; //userid为第0个 避免ios多次添加userid

        let share = this.get('share'); //获取share
        if(share == 1 || think.isEmpty(getuserid)){
            this.redirect('/vote/index/test?season=1');   //如果share=1 或者没有userid 则为外部访问,跳转
        }

        let useragen  = this.userAgent(); //获取手机的参数


        //时间函数
        let nowunix = Math.round(new Date().getTime() / 1000);//获取当前时间时间戳
        var date = new Date();
        date.setHours(23);
        date.setMinutes(59);
        date.setSeconds(59);
        let secunix = Math.round(date.getTime() / 1000); //获取当天23:59:59的时间戳

        var datezero = new Date();
        datezero.setHours(0);
        datezero.setMinutes(0);
        datezero.setSeconds(0);
        let secunixzero = Math.round(datezero.getTime() / 1000); //获取当天0:0:0的时间戳

        let votestate = true;
        let todayvote = await doulian_vote.query(
            "select userid from doulian_vote where addtime > "+secunixzero+" and userid != -1 and userid = "+userid
        );//大于今天0点且用户id不等于-1的（用户今天投票了）
        console.log('今天没有',todayvote);
        // console.log(nowunix,secunix,secunixzero)
        if(nowunix<secunix && !think.isEmpty(todayvote)){
            votestate = false
        }
        // console.log(useragen,nowunix);

        let insert = await doulian_visit.query(
            "insert into doulian_visit (userid, addtime, useragent, season_id) values ("+userid+","+nowunix+",'"+useragen+"',"+sesonnum+")"
        );
        let update = await doulian_season.query(
            "update doulian_season set visit_count = visit_count + 1 where id = " + sesonnum
        );




        let userchoose = await doulian_vote.query(
            "select source_id, addtime from doulian_vote where addtime < "+secunix+" and userid = "+ userid
        );
        console.log(userchoose);
        let choosearr = [];
        let choosedate = [];
        for(var j in userchoose){
            choosearr.push(userchoose[j].source_id);
            choosedate.push(userchoose[j].addtime);
        }
        console.log('choooooo',choosearr);
        console.log('ttttttime',choosedate[choosedate.length-1],secunixzero);




        let data = await doulian_source.where({season: sesonnum}).order("order_index ASC").select();
        // console.log(data)
        let title = await doulian_season.where({id: sesonnum}).find();
        // console.log(title);
        let vuedata = [];
        for(var i in data){
            let classmethod = {};
            classmethod.class_id = data[i].id;
            classmethod.class_name = data[i].class_name;
            classmethod.vote_number = data[i].total_vote_number;
            vuedata.push(classmethod)
        }

        console.log('lalalalala',vuedata);
        for(var i in vuedata){
            let number = choosearr.indexOf(vuedata[i].class_id);
            console.log(number);
            if(number != -1) {
                if (choosedate[choosedate.length - 1] < secunixzero) {
                    vuedata[i].choosen = true
                } else {
                    vuedata[i].choosen = false
                }
            }else{
                vuedata[i].choosen = true

            }
            console.log(vuedata[i].choosen)
        }



        console.log(vuedata)
        // console.log(vuedata,data);

        this.assign({
            data: data,
            season_title : title.description,
            vuedata: JSON.stringify(vuedata),
            votestate : votestate
        });

        this.cookie("userid", userid); //设置cookie
        this.cookie("useragen", useragen); //设置cookie

        return this.display();
    }

   
    
    
    async votejaxAction(){
        let classid = this.get('classid');
        console.log(classid);
        let nowunix = Math.round(new Date().getTime() / 1000);//获取当前时间时间戳
        let doulian_source = this.model('doulian_source',qingyun_oam);  //实例化地推用户的表
        let doulian_vote = this.model('doulian_vote',qingyun_oam);  //实例化地推用户的表

        let userid = this.cookie("userid"); //获取名为 userid 的 cookie
        let insert = await doulian_vote.query(
            "insert into doulian_vote (userid, addtime, source_id) values ("+userid+","+nowunix+","+classid+")"
        );

        let update = await doulian_source.query(
            "update doulian_source set total_vote_number = total_vote_number + 1 where id = " + classid
        );

        return this.json({data:1})
    }

    async testAction() {
        //auto render template file index_index.html
        let doulian_visit = this.model('doulian_visit',qingyun_oam);  //实例化地推用户的表
        let doulian_season = this.model('doulian_season',qingyun_oam);  //实例化地推用户的表
        let doulian_source = this.model('doulian_source',qingyun_oam);  //实例化地推用户的表
        let doulian_vote = this.model('doulian_vote',qingyun_oam);  //实例化地推用户的表

        let sesonnum = this.get('season');
        let userid = this.get('userid');
        if(think.isEmpty(userid)){  //外部访问
            userid = '-1'
        }
        let useragen  = this.userAgent();
        //时间函数
        let nowunix = Math.round(new Date().getTime() / 1000);//获取当前时间时间戳
        var date = new Date();

        date.setHours(23);
        date.setMinutes(59);
        date.setSeconds(59);
        let secunix = Math.round(date.getTime() / 1000); //获取23:59:59的时间戳

        var datezero = new Date();

        datezero.setHours(0);
        datezero.setMinutes(0);
        datezero.setSeconds(0);
        let secunixzero = Math.round(datezero.getTime() / 1000); //获取0:0:0的时间戳

        let votestate = true;
        let todayvote = await doulian_vote.query(
            "select userid from doulian_vote where addtime > "+secunixzero+" and userid != -1 and userid = "+userid
        );//大于今天0点且用户id不等于-1的（用户今天投票了）

        console.log(nowunix,secunix,secunixzero)
        if(nowunix<secunix && !think.isEmpty(todayvote)){
            votestate = false
        }
        console.log(useragen,nowunix);

        let insert = await doulian_visit.query(
            "insert into doulian_visit (userid, addtime, useragent, season_id) values ("+userid+","+nowunix+",'"+useragen+"',"+sesonnum+")"
        );
        let update = await doulian_season.query(
            "update doulian_season set visit_count = visit_count + 1 where id = " + sesonnum
        );



        let data = await doulian_source.where({season: sesonnum}).order("order_index ASC").select();
        let title = await doulian_season.where({id: sesonnum}).find();
        console.log(title);
        let vuedata = [];
        for(var i in data){
            let classmethod = {};
            classmethod.class_id = data[i].id;
            classmethod.class_name = data[i].class_name;
            classmethod.vote_number = data[i].total_vote_number;
            vuedata.push(classmethod)
        }
        console.log(vuedata,data);

        this.assign({
            data: data,
            season_title : title.description,
            vuedata: JSON.stringify(vuedata),
            votestate : votestate
        });

        this.cookie("userid", userid); //设置cookie
        this.cookie("useragen", useragen); //设置cookie

        return this.display();
    }
    
    
}