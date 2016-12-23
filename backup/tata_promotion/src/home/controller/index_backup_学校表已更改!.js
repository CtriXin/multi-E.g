'use strict';

import Base from './base.js';

let qiniu = require("qiniu");
let qiniuconfig = think.config('key', undefined, 'home');
qiniu.conf.ACCESS_KEY = qiniuconfig.Access_Key;
qiniu.conf.SECRET_KEY = qiniuconfig.Secret_Key;
let fs = require('fs');
let request = require('request');


//实例化数据库,qingyun_data调取用户数据,qingyun_oam调用oam数据
let qingyun_data = gettatadb('qingyun_account');
let qingyun_oam = gettatadb('qingyun_oam');


//时间函数
let nowunix = Math.round(new Date().getTime() / 1000);//获取当前时间时间戳

/*
 * MEMO:
 * 1. npm install (qiniu & request)
 */





export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */

    async indexAction() {
        //auto render template file index_index.html
        let user_account = this.model('user_account',qingyun_data);  //实例化用户的表
        let promotion_insert = this.model('promotion_insert',qingyun_oam);  //实例化用户的表
        let data = await user_account.where({telephone:'18600666044'}).find();
        return this.display();
    }

    backupAction(){
        return this.display();
    }

    buttonAction() {
        return this.display();
    }

    typographyAction(){
        return this.display();
    }

    gridAction(){
        return this.display();
    }

    formAction(){
        return this.display();
    }

    editorAction(){
        return this.display();
    }

    tableAction(){
        return this.display();
    }

    tabAction(){
        return this.display();
    }

    panelAction(){
        return this.display();
    }
    bloglistAction(){
        return this.display();
    }
    blogdetailAction(){
        return this.display();
    }
    rabcAction(){
        return this.display();
    }
    elementAction(){
        return this.display();
    }
    uploadsAction(){
        return this.display();
    }
    dataAction(){
        return this.display();
    }
    analysisAction(){
        return this.display();
    }
    seniorAction(){
        return this.display();
    }
    salaryAction(){
        return this.display();
    }







    adminAction(){
        return this.display();
    }
    provincedataAction(){
        return this.display();
    }
    provinceAction(){
        return this.display();
    }

    /*
     * 登录
     * 1. login
     * 2. logincheck -- 校验用户数据
     */
    loginAction(){
        return this.display();
    }
    //登录验证
    async logincheckAction(){
        console.log('haha');

        if(this.isGet()){
            return this.display();
        }
        //这里可以通过post方法获取所有的数据，数据已经在logic里做了校验
        let data = this.post();
        let md5 = think.md5(data.password);
        console.log(data);
        console.log(md5,data.phonenumber);
        //用户名和加密后的密码去匹配数据库中对于
        let promotion_agent = this.model('promotion_agent',qingyun_oam);  //实例化地推用户的表
        let result = await promotion_agent.where({agent_phone: data.phonenumber, password: md5}).find();
        //如果未匹配到任何数据，表示用户名或者密码错误
        if(think.isEmpty(result)){
            await this.session("login_state", 'fail');
            return this.json({code:'fail'})
        }else if(result.frozen == 1){
            return this.json({code:'frozen'})
        }
        //获取到用户信息后，将用户信息写入session
        await this.session("userInfo", result);

        return this.json({code:'success'})

    }


    /*
     * 添加用户
     * 1. addagent
     * 2. insertagent -- 插入用户数据到数据库,用手机查用户id,用用户id获取信息,获取university_id, 用uid查学校并插库
     */
    //添加人员
    async addagentAction(){
        return this.display();
    }
    //插入agent信息
    async insertagentAction(self){
        if(this.isGet()){
            return this.display();
        }
        //这里可以通过post方法获取所有的数据，数据已经在logic里做了校验
        let data = this.post();
        let md5 = think.md5(data.password);
        console.log('提交的数据为:');
        console.log(data);
        //用户名和加密后的密码添加进数据库
        let promotion_agent = this.model('promotion_agent',qingyun_oam);  //实例化地推用户的表
        let user_account = this.model('user_account',qingyun_data);  //实例化用户的表
        let user_info = this.model('user_info',qingyun_data);  //实例化用户的表
        let university = this.model('university',qingyun_data);  //实例化用户的表

        let verifyagent = await user_account.where({telephone: data.phonenumber,verify_status: '1'}).find();
        console.log(verifyagent);
        if(!think.isEmpty(verifyagent)){
            let agentid = verifyagent.userid;
            let agent_info =  await user_info.where({userid: agentid}).find();
            let agentuniversity_id = agent_info.university_id;
            let agentuniversity_info = await university.where({university_id: agentuniversity_id}).find();
            let insertId = await promotion_agent.add({
                agent_phone: data.phonenumber,
                name:agent_info.realname,
                password: md5,
                university: agentuniversity_info.university_name,
                area:  agentuniversity_info.university_name,
                addtime: nowunix
            });
            return this.redirect('/index/agentlist');

        }else{
            return this.fail("login fail");
        }

    }




    //添加人员
    async 第一次渲染Action(){
        let university_data = this.model('university',qingyun_data);  //实例化用户的表
        let country = await university_data.where("country = '中国' OR country = '香港'").select();
        //console.log(country);
        let province_Arr = [];
        for( var i in country){
            let province = country[i].province;
            let tagindex = province_Arr.indexOf(province);
            if(tagindex == -1){
                province_Arr.push(province)
            }
        }
        this.assign({
            province: province_Arr.toString()
        });

        //console.log(province_Arr);
        return this.display();
    }
    //插入agent信息
    async 插库Action(self){
        if(this.isGet()){
            return this.display();
        }
        //这里可以通过post方法获取所有的数据，数据已经在logic里做了校验
        let data = this.post();
        let md5 = think.md5(data.password);
        console.log('提交的数据为:');
        console.log(data);
        //用户名和加密后的密码添加进数据库
        let promotion_agent = this.model('promotion_agent',qingyun_oam);  //实例化地推用户的表
        let insertId = await promotion_agent.add({
            agent_phone: data.phonenumber,
            name:data.name,
            password: md5,
            university: data.university,
            area:  data.university,
            addtime: nowunix
        });
        ////如果插库不成功则不会返回id
        if(think.isEmpty(insertId)){
            return this.fail("login fail");
        }
        return this.redirect('/index/agentlist');
    }
    //获取省列表,将会渲染城市和学校
    async getcityschoolAction(){
        let province = this.post('province');
        let university_data = this.model('university',qingyun_data);  //实例化用户的表
        let province_selected = await university_data.where({province: province}).select();
        let city_Arr = [];
        for( var i in province_selected){
            let city_name = province_selected[i].city;
            let tagindex = city_Arr.indexOf(city_name);
            if(tagindex == -1){
                city_Arr.push(city_name)
            }
        }
        //console.log(city_Arr); //['城市1','城市2','城市3'...]
        let school_Arr = [];
        for( var i in province_selected){
            let school_name = province_selected[i].university_name;
            let tagindex = school_Arr.indexOf(school_name);
            if(tagindex == -1){
                school_Arr.push(school_name)
            }
        }
        //console.log(school_Arr); //['学校1','学校2','学校3'...]
        let data ={};
        data.city = city_Arr.toString();
        data.school = school_Arr.toString();
        data.code = 'success';
        return this.json(data)
    }
    //通过省列表获取城市列表,通过城市选择获取学校
    async getschoolAction(){
        let province = this.post('province');
        let city = this.post('city');
        let university_data = this.model('university',qingyun_data);  //实例化用户的表
        let city_selected = await university_data.where({province: province,city: city}).select();
        if(city == '-1'){
            city_selected = await university_data.where({province: province}).select();
        }
        let school_Arr = [];
        for( var i in city_selected){
            let school_name = city_selected[i].university_name;
            let tagindex = school_Arr.indexOf(school_name);
            if(tagindex == -1){
                school_Arr.push(school_name)
            }
        }
        //console.log(school_Arr); //['学校1','学校2','学校3'...]
        let data ={};
        data.school = school_Arr.toString();
        data.code = 'success';
        return this.json(data)
    }



    /*
     * 用户管理
     * 1. agentlist
     * 2. searchagent -- 搜索用户,按级别和关键词搜索
     * 3. changeagentinfo -- 修改用户信息
     * 4. insertagentinfo -- 插库
     * 5. frozenagent -- 冻结用户
     * 6. authority -- 用户权限
     */
    //用户管理
    async agentlistAction(){

        //获取登录session,判断用户权限
        let userInfo = await this.session("userInfo");
        let agent_level = '初级经理';
        if(userInfo.level == 1){
            agent_level = '高级经理';
        }else if(userInfo.level == 2){
            agent_level = '省主管';
        }else if(userInfo.level == 3){
            agent_level = '管理员';
        }

        if(userInfo.level == 0 || userInfo.level == 1){
            return this.redirect('/index')
        }

        //获取cookie 搜索的内容
        let level_search = this.cookie('search_agent_level');
        let search_info = this.cookie('search_agent_info');

        let promotion_agent = this.model('promotion_agent',qingyun_oam);  //实例化地推用户的表
        let data ='';

        //如果级别搜索,搜索框为空 || 输入框为空,级别搜索为全部
        if(think.isEmpty(level_search) && think.isEmpty(search_info) || level_search == -1 && think.isEmpty(search_info)){
            data = await promotion_agent.where({level:{'<':userInfo.level}}).order("level DESC").page(this.get("page"), 10).countSelect();
        }
        //如果级别搜索已选 && 不为全部级别
        else if(!think.isEmpty(level_search) && level_search != -1 ){
            data = await promotion_agent.where({level:level_search}).order("level DESC").page(this.get("page"), 10).countSelect();
        }
        //如果搜索框不为空
        else if(!think.isEmpty(search_info)){
            data = await promotion_agent.where({agent_phone:search_info,level:{'<':userInfo.level}}).order("level DESC").page(this.get("page"), 10).countSelect();
        }

        this.assign({
            page_data : data,
            data : data.data
        });

        //删除cookie,以便下次删除
        this.cookie("search_agent_level", null); //删除名为 search_agent_level 的 cookie
        this.cookie("search_agent_info", null); //删除名为 search_agent_info 的 cookie
        return this.display();
    }
    //用户管理页面搜索agent
    async searchagentAction(){
        let data = this.post();
        let search_agent_level = data.level;
        let search_agent_info = data.search_info;
        this.cookie('search_agent_level',search_agent_level);
        this.cookie('search_agent_info',search_agent_info);
        return this.redirect('/index/agentlist')
    }
    //修改用户信息
    async changeagentinfoAction(){
        let userid = this.get('userid');
        let promotion_agent = this.model('promotion_agent',qingyun_oam);  //实例化地推用户的表
        let userdata = await promotion_agent.where({id:userid}).find();
        console.log(userdata);
        this.assign({
           userdata: userdata
        });
        return this.display();
    }
    //获取agent修改的信息 上传数据库
    async insertagentinfoAction(){
        let data = this.post();
        console.log(data);
        let userid = this.get('userid');
        let promotion_agent = this.model('promotion_agent',qingyun_oam);  //实例化地推用户的表
        if(think.isEmpty(data.password)){
            let affectedRows = await promotion_agent.where({id:userid}).update({alipay: data.alipay,address:data.address});
        }else{
            let md5 = think.md5(data.password);
            let affectedRows = await promotion_agent.where({id:userid}).update({alipay: data.alipay,password:md5,address:data.address});

        }
        return this.redirect('/index/agentlist')
    }
    //冻结用户
    async frozenagentAction(){
        let agentid = this.post('agentid');
        let promotion_agent = this.model('promotion_agent',qingyun_oam);  //实例化地推用户的表
        let affectedRows = await promotion_agent.where({id: agentid}).update({frozen: 1});
        return this.json({
            code: 1
        })
    }
    //用户权限
    async agentauthorityAction(){
        let userid = this.get('userid');
        let promotion_agent = this.model('promotion_agent',qingyun_oam);  //实例化地推用户的表
        let userdata = await promotion_agent.where({id:userid}).find();

        let university_data = this.model('university',qingyun_data);  //实例化用户的表
        let country = await university_data.where("country = '中国' OR country = '香港'").select();
        //console.log(country);
        let province_Arr = [];
        for( var i in country){
            let province = country[i].province;
            let tagindex = province_Arr.indexOf(province);
            if(tagindex == -1){
                province_Arr.push(province)
            }
        }
        let area = userdata.area;
        let agent_original_area = area.split(',');
        console.log(agent_original_area);

        //console.log(userdata);
        this.assign({
            userdata: userdata,
            province: province_Arr.toString(),
            area : agent_original_area
        });
        return this.display();
    }
    async agentcitylistAction(){
        let level  = this.post('level');
        let data_school = this.post('school_check').toString();
        let data_province = this.post('province_check').toString();  //强转string
        data_province = data_province.split(',');
        data_school = data_school.split(','); //拆分,组成数组

        let userid = this.get('userid');
        let promotion_agent = this.model('promotion_agent',qingyun_oam);  //实例化地推用户的表
        let userdata = await promotion_agent.where({id:userid}).find();

        let userarea = userdata.area;  //数据库中的区域
        let province_Arr = []; //定义接收关系啊区域参数的数组
        let area = userarea.split(','); //将数据库中的管辖区域分割开
        for(var n in area){
            province_Arr.push(area[n]); //将数据库中的关系啊区域先插入到数组中,以便一会插库的时候,直接更新
        }
        console.log('这个是选择的学校:',JSON.stringify(data_school));
        console.log('这个是选择的省份:',JSON.stringify(data_province));

        if(think.isEmpty(data_school[0])){   //列表为省列表,选择的参数为省!
            console.log('省');

            for(var i in data_province){
                let tagindex = province_Arr.indexOf(data_province[i]);
                console.log(typeof (province_Arr));
                console.log(typeof (data_province[i]))
                console.log(tagindex);
                if(tagindex == -1){
                    province_Arr.push(data_province[i]) //将前端选择的学校添加到数组
                }
            }
        }else if(think.isEmpty(data_province[0])){
            console.log('学校');
            for(var i in data_school){
                let tagindex = province_Arr.indexOf(data_school[i]);
                console.log(tagindex);
                if(tagindex == -1){
                    province_Arr.push(data_school[i]); //将前端选择的学校添加到数组
                }
            }
        }

        console.log('这个是最终更新的管辖区域:',JSON.stringify(province_Arr));

        let affectedRows = await promotion_agent.where({id:userid}).update({area:province_Arr.toString(),level:level});  //更新
        return this.redirect('/index/agentauthority?userid='+userid)
    }










    //城市管理
    async cityAction(){
        let userid = this.get('userid');
        let promotion_agent = this.model('promotion_agent',qingyun_oam);  //实例化地推用户的表
        let userdata = await promotion_agent.where({id:userid}).find();

        let university_data = this.model('promotion_city',qingyun_oam);  //实例化用户的表
        let country = await university_data.select();
        //console.log(country);
        let province_Arr = [];
        for( var i in country){
            let province = country[i].province;
            let tagindex = province_Arr.indexOf(province);
            if(tagindex == -1){
                province_Arr.push(province)
            }
        }

        //console.log(userdata);
        this.assign({
            userdata: userdata,
            province: province_Arr.toString(),
        });
        return this.display();
    }
    async citypriceAction(){
        let province = this.post('province');
        let university_data = this.model('promotion_city',qingyun_oam);  //实例化用户的表
        let province_selected = await university_data.where({province: province}).select();
        console.log(province_selected)
        let city_Arr = [];
        for( var i in province_selected){
            let city_name = province_selected[i].city;
            let tagindex = city_Arr.indexOf(city_name);
            if(tagindex == -1){
                city_Arr.push(city_name)
            }
        }
        //console.log(city_Arr); //['城市1','城市2','城市3'...]
        let data ={};
        data.city = city_Arr;
        data.code = 'success';
        data.info = province_selected;

        return this.json(data)

    }
    async updatacitypriceAction(){
        let updata_price = this.post('price');
        let updata_city = this.post('city');
        console.log(updata_city,updata_price);
        let province_city_table = this.model('promotion_city',qingyun_oam);  //实例化用户的表
        //let city_selected = await province_city_table.where({city: updata_city}).find();
        let affectedRows = await province_city_table.where({city: updata_city}).update({price: updata_price});

        let data = {};
        data.code = 'success';
        return this.json(data)

    }
    async updatacitystateAction(){
        let updata_state = this.post('state');
        let updata_city = this.post('city');
        console.log(updata_city,updata_state);
        let province_city_table = this.model('promotion_city',qingyun_oam);  //实例化用户的表
        let affectedRows = await province_city_table.where({city: updata_city}).update({state: updata_state});
        let data = {};
        data.code = 'success';
        data.state = updata_state;
        return this.json(data)

    }


    //学校管理
    async schoolAction(){
        let userid = this.get('userid');
        let promotion_agent = this.model('promotion_agent',qingyun_oam);  //实例化地推用户的表
        let userdata = await promotion_agent.where({id:userid}).find();

        let university_data = this.model('promotion_city',qingyun_oam);  //实例化用户的表
        let country = await university_data.select();
        //console.log(country);
        let province_Arr = [];
        for( var i in country){
            let province = country[i].province;
            let tagindex = province_Arr.indexOf(province);
            if(tagindex == -1){
                province_Arr.push(province)
            }
        }

        //console.log(userdata);
        this.assign({
            userdata: userdata,
            province: province_Arr.toString(),
        });
        return this.display();
    }
    //获取省列表,将会渲染城市和学校
    async getcitypriceAction(){
        let province = this.post('province');
        let university_data = this.model('promotion_city',qingyun_oam);  //实例化用户的表
        let province_selected = await university_data.where({province: province}).select();

        let university_data_ori = this.model('university',qingyun_data);  //实例化用户的表
        let province_selected_ori = await university_data_ori.where({province: province}).select();
        let city_Arr = [];
        for( var i in province_selected){
            let city_name = province_selected[i].city;
            let tagindex = city_Arr.indexOf(city_name);
            if(tagindex == -1){
                city_Arr.push(city_name)
            }
        }
        //console.log(city_Arr); //['城市1','城市2','城市3'...]
        let school_Arr = [];
        for( var i in province_selected_ori){
            let school_name = province_selected_ori[i].university_name;
            let tagindex = school_Arr.indexOf(school_name);
            if(tagindex == -1){
                school_Arr.push(school_name)
            }
        }
        //console.log(school_Arr); //['学校1','学校2','学校3'...]
        let data ={};
        data.city = city_Arr.toString();
        data.school = school_Arr.toString();
        data.code = 'success';
        return this.json(data)
    }
    //通过省列表获取城市列表,通过城市选择获取学校
    async schoolpriceAction(){
        let province = this.post('province');
        let city = this.post('city');
        let university_data = this.model('university',qingyun_data);  //实例化用户的表
        let city_selected = await university_data.where({province: province,city: city}).select();
        if(city == '-1'){
            city_selected = await university_data.where({province: province}).select();
        }
        let school_Arr = [];
        for( var i in city_selected){
            let school_name = city_selected[i].university_name;
            let tagindex = school_Arr.indexOf(school_name);
            if(tagindex == -1){
                school_Arr.push(school_name)
            }
        }
        //console.log(school_Arr); //['学校1','学校2','学校3'...]
        let data ={};
        data.school = school_Arr.toString();
        data.code = 'success';
        return this.json(data)
    }







    async importAction(){
        let data = this.post('import_data'); //获取录入的excel
        let promotion_insert = this.model('promotion_insert',qingyun_oam);  //实例化用户的表
        let jsondata = JSON.parse(data); //转json格式
        let import_val = []; //将是插入到数据库中的值
        for(var i in jsondata){
            let insert_type = {};
            let phone_number = jsondata[i].phone; //后面的phone为自定义的单词名（excel）
            insert_type.phone_number = phone_number;
            insert_type.addtime = nowunix;
            import_val.push(insert_type)
        }
        //console.log('这个是上传的号+时间:',JSON.stringify(import_val));
        let insertId = await promotion_insert.addMany(import_val);
        let val = [];
        for(var n in import_val){
            val.push(import_val[n].phone_number)
        }
        console.log('这个是上传的号:',JSON.stringify(val));

        this.cookie("upload_phone_number", val); //将 cookie upload_phone_number 值设置为 val
        this.cookie("addtime", nowunix); //将 设置时间戳cookie
        return this.redirect('/index/checkimportdata')

    }

    async checkimportdataAction(){
        let cookie = this.cookie("upload_phone_number"); //获取名为 theme 的 cookie['电话',‘电话’,‘电话’]
        let addtimecookie = this.cookie("addtime"); //获取本次的时间戳
        let promotion_insert = this.model('promotion_insert',qingyun_oam);  //实例化用户的表
        let data = await promotion_insert.query(
            "select phone_number,count(phone_number) as total_data from promotion_insert where phone_number in " +
            "("+cookie.toString()+") group by phone_number"   //批量查询
        );
        console.log('自己的表重复数据:',JSON.stringify(data));
        let repeat_phone = [];
        for( var i in data ){
            let repeat_num = data[i].total_data;
            if(repeat_num>1){
                repeat_phone.push(data[i].phone_number)
            }
        }
        console.log('重复的数据:',JSON.stringify(repeat_phone));
        let updata_repeat = await promotion_insert.query(
            "update promotion_insert set error_code=1 where phone_number in("+repeat_phone.toString()+") and addtime = "+addtimecookie+" "
        );  //批量修改,时间一样,号码一样的 error_code 改为 1







        console.log('hahahahahah');
        this.cookie("upload_phone_number", null); //删除名为 theme 的 cookie
        this.cookie("addtime", null); //删除名为 theme 的 cookie


        //console.log(data)

        //return this.json({
        //        code:1,
        //        state: 'successs'
        //    });
    }










    /*
    七牛云上传
     */
    /**
     * step I
     * 渲染页面,获取原始buket,并对domain,uptoken_url赋值
     * 若不点击空间名,则在当前空间上传
     */
    async uploadAction(){
        //auto render template file index_index.html
        let timestamp = Math.round(new Date().getTime()/1000);
        let bucname = 'tata-prod';  //以后可以做一个输入框以便随时更改存储路径
        //if(bucname == undefined){
        //    bucname = 'tata-prod'
        //}
        await this.session("bucket_name", bucname);
        let prefixname = timestamp;
        //if(prefixname == undefined){
        //    prefixname = timestamp
        //}
        console.log(prefixname);
        console.log('############原始buket: '+bucname,'############原始prefix: '+prefixname);
        this.assign({
            orignalbucket : bucname,
            orignalprefix : prefixname,
            domain: qiniuconfig.Domain,
            uptoken_url: qiniuconfig.Uptoken_Url

        });
        return this.display();
    }

    /**
     * step I.I
     * 渲染页面的时候 需要返回Uptoken_Url,这个url定义的是这个方法
     * 这个方法将会生成上传凭证
     */
    async gettokenAction() {
        let qiniuconfig = think.config('key', undefined, 'home');
        let bucname = await this.session('bucket_name');
        console.log('############当前buket: '+bucname);
        let putPolicy = new qiniu.rs.PutPolicy(bucname);
        let data = {};
        data.uptoken = putPolicy.token();
        console.log(data.uptoken);
        return this.json(data)
    }


    /**
     * step II
     * 通过form-wizard.js的ajax请求,异步获取数据,传过来的数据分别是上传文件的 空间名 和 前缀
     * 同时进行session赋值操作,
     */
    async getvalueAction(){
        let dic = this.post('dic');
        //let path = this.post('path');

        await this.session('bucket_name',dic);
        await this.session('session_name',path);
        console.log('$$$$$$$$$$$$这个是更新后的buket: '+dic,'$$$$$$$$$$$这个是更新后的前缀: '+path);
        let data = {};
        data.dic = dic;
        data.path = path;
        return this.json(data);
    }



    /**
     * 删除单条记录
     */
    async deleteAction(){
        let self = this;
        let key = this.get('key');
        console.log(key);
        let bucname = await this.session('bucket_name');
        console.log(bucname);
        var client = new qiniu.rs.Client();
        let data = {};
        client.remove(bucname, key, function(err, ret) {
            if (!err) {
                // ok
                console.log("haha");
                data.code = 1;
                return self.json(data);
                //window.location.reload();
            } else {
                console.log(err);
                // http://developer.qiniu.com/docs/v6/api/reference/codes.html
            }
        })
    }


}