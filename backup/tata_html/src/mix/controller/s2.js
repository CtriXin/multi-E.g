/**
 * Created by xin on 16/5/27.
 */
'use strict';

import Base from './base.js';

//实例化数据库,qingyun_data调取用户数据,qingyun_oam调用oam数据
let qingyun_data = gettatadb('qingyun_account');
let qingyun_oam = gettatadb('qingyun_oam');



//公共的方法!!!
async function getpageInfo(self,pageIndex) {
    let vol = await self.session("vol");
    let mix_index = self.model('mix_index',qingyun_oam);  //实例化地推用户的表
    let share = self.get('share'); //获取连接中share属性,避免外部访问
    let useragent = self.userAgent();
    console.log(useragent);
    console.log(vol);
    let userid = await self.session("userid");
    if(share == 1 || think.isEmpty(userid) || userid == -1){  //此状态分别为 分享 || 空userid || userid为-1
        userid = '-1';
        let insertUser = await mix_index.add({
            userid : userid,
            time : nowunix,
            vol:vol,
            page_index: pageIndex,
            useragent: useragent
        });
    }else if(!think.isEmpty(userid) && userid != -1) {   //如果页面不是通过客户端访问的,userid则为空,这里判断,如果 非 空,定义name值为数据库中用户的名字
        let insertUser = await mix_index.add({
            userid : userid,
            time : nowunix,
            vol:vol,
            page_index: pageIndex,
            useragent: useragent
        });
    }
    return self.display();
}

//时间函数
let nowunix = Math.round(new Date().getTime() / 1000);//获取当前时间时间戳

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */

    async indexAction() {
        //auto render template file index_index.html
        let userid = await this.session("userid");
        console.log('session中的userid',userid);
        if(think.isEmpty(userid) || userid == -1){
            userid = this.get('userid');
        }
        console.log('userid是: ',userid);
        let mix_index = this.model('mix_index',qingyun_oam);  //实例化地推用户的表
        let mix_season = this.model('mix_season',qingyun_oam);  //实例化地推用户的表
        let share = this.get('share'); //获取连接中share属性,避免外部访问
        console.log('share: ',share);
        let useragent = this.userAgent();
        console.log(useragent);
        let vol = this.get('vol');
        console.log('第几期: ',vol);
        await this.session("vol", vol);

        if(share == 1 || think.isEmpty(userid) || userid == -1){  //此状态分别为 分享 || 空userid || userid为-1
            userid = '-1';
            await this.session("userid", userid);
            let insertUser = await mix_index.add({
                userid : userid,
                time : nowunix,
                vol:vol,
                page_index: 0,
                useragent: useragent
            });
        }else if(!think.isEmpty(userid) && userid != -1) {   //如果页面不是通过客户端访问的,userid则为空,这里判断,如果 非 空,定义name值为数据库中用户的名字
            console.log(userid,'userid????inside');
            await this.session("userid", userid);
            let insertUser = await mix_index.add({
                userid : userid,
                time : nowunix,
                vol: vol,
                page_index: 0,
                useragent: useragent
            });
        }

        let season_length = await mix_season.count();
        console.log('数据库中有几期的数据: ',season_length);
        let update_count = await mix_season.query(
            "update mix_season " +
            "set count = count + 1 " +
            "where season_id = "+vol
        );
        let season_data = await mix_season.select();
        // console.log(season_data);
        this.assign({
            data: season_data,
            length: season_length
        });


        return this.display();
    }

    async page1Action() {
        getpageInfo(this,1)
    }

    async page2Action() {
        getpageInfo(this,2)
    }

    async page3Action() {
        getpageInfo(this,3)
    }

    async page4Action() {
        getpageInfo(this,4)
    }

    async page5Action() {
        getpageInfo(this,5)
    }

    async page6Action() {
        getpageInfo(this,6)
    }



}