'use strict';

import Base from './base.js';

let request = require('request');


//
/**
 * TODO
 * 1. content_id 改成获取的帖子id
 * 2. cmdid 协议号 不用改
 * 3. userid 改成获取用户的userid
 * 4. url: "http://pro.tataufo.com:11000/internal/v1/" 改为正式环境
 */

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        //auto render template file index_index.html
        let self = this;
        let userid = parseInt(this.get('userid'));
        let content_id = parseInt(this.get('content_id'));
        console.log(this.get('content_id'));
        await this.session("userid",  userid);
        await this.session("content_id", content_id);

        let cmdid = 11009; //请求的协议号

        let params = {};
        params.content_id = content_id;

        let common = {};
        common.userid = userid;
        common.userkey = '';

        let body = {};
        body.common = common;
        body.params = params;

        console.log('header请求头');
        console.log(body);


        let option = {
            url: "http://pro.tataufo.com:11000/internal/v1/",
            method: "POST",
            json: true,
            headers: {
                "cmdid": cmdid,
                "timestamp": new Date().getTime()
            },
            body: body
        };
        request(option, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('帖子详情报头');
                console.log(body);
                //console.log(body.data.content.topic_info[0].topic_id);
                self.assign({
                    data: body.data.content,
                    topic_id: body.data.content.topic_info[0].topic_id,
                    page_index: 1 //默认显示第一页的点赞列表
                });
                let content_body = body;
                let topic_id = body.data.content.topic_info[0].topic_id;
                let pageindex = 1;



                //开启嵌套!!! TODO 内部为获取评论的接口调试
                let cmdid_reply = 11010; //请求的协议号

                let params_reply = {};
                params_reply.content_id = content_id;
                params_reply.page_index = parseInt(topic_id);

                let common_reply = {};
                common_reply.userid = userid;
                common_reply.userkey = '';

                let body_reply = {};
                body_reply.common = common;
                body_reply.params = params;



                let option = {
                    url: "http://pro.tataufo.com:11000/internal/v1/",
                    method: "POST",
                    json: true,
                    headers: {
                        "cmdid": cmdid_reply,
                        "timestamp": new Date().getTime()
                    },
                    body: body_reply
                };
                request(option, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log('回复详情报头');
                        console.log(body);
                        //console.log(body.data.comments[0].commenter)
                        //let data_reply = body.data;

                        self.assign({
                            data_reply: body.data.comments
                        });
                        //return self.json(data);
                        return self.display();

                    } else {
                        console.log(error);
                    }
                });


            } else {
                console.log(error);
            }
        });



    }

    async getlikeAction(){
        let self = this;
        let data = this.post(data);
        //console.log(data);
        let userid = await this.session("userid");
        let content_id = await this.session("content_id");

        let cmdid = 11015; //请求的协议号

        let params = {};
        params.content_id = content_id;
        params.topic_id = parseInt(data.topic_id);
        params.page_index = parseInt(data.page_index);

        let common = {};
        common.userid = userid;
        common.userkey = '';

        let body = {};
        body.common = common;
        body.params = params;



        let option = {
            url: "http://pro.tataufo.com:11000/internal/v1/",
            method: "POST",
            json: true,
            headers: {
                "cmdid": cmdid,
                "timestamp": new Date().getTime()
            },
            body: body
        };
        request(option, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                //console.log(body.data.likers);
                let data = body.data.likers;

                //self.assign({
                //    data: body.data.content
                //});
                return self.json(data);
            } else {
                console.log(error);
            }
        });
    }


    async getreplyAction(){
        let self = this;
        let data = this.post(data);
        let userid = await this.session("userid");
        let content_id = await this.session("content_id");
        console.log('topid:',data.topic_id,',pageindex:',data.page_index);

        let cmdid = 11010; //请求的协议号

        let params = {};
        params.content_id = content_id;
        params.page_index = parseInt(data.page_index);

        let common = {};
        common.userid = userid;
        common.userkey = '';

        let body = {};
        body.common = common;
        body.params = params;



        let option = {
            url: "http://pro.tataufo.com:11000/internal/v1/",
            method: "POST",
            json: true,
            headers: {
                "cmdid": cmdid,
                "timestamp": new Date().getTime()
            },
            body: body
        };
        request(option, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body.data.comments);
                let data = body.data.comments;

                //self.assign({
                //    data_reply: body.data.comments
                //});
                return self.json(data);
            } else {
                console.log(error);
            }
        });




    }



}