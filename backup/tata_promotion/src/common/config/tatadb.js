/**
 * Created by xin on 16/5/4.
 */

'use strict';
/**
 * 公共数据库
 * @type {Object}
 */
export default {
    qingyun_account:{
        type: "mysql",
        log_sql: true,
        log_connect: true,
        adapter: {
            mysql: {
                host: "192.168.5.254",
                port: "",
                database: "account", //数据库名称
                user: "root", //数据库帐号
                password: "Inno3pku", //数据库密码
                prefix: "",
                encoding: "utf8"
            },
            mongo: {

            }
        }
    },
    qingyun_oam:{
        type: "mysql",
        log_sql: true,
        log_connect: true,
        adapter: {
            mysql: {
                host: "192.168.5.254",
                port: "",
                database: "oam", //数据库名称
                user: "root", //数据库帐号
                password: "Inno3pku", //数据库密码
                prefix: "",
                encoding: "utf8"
            },
            mongo: {

            }
        }
    },
    qingyun_account_dev:{
        type: "mysql",
        log_sql: true,
        log_connect: true,
        adapter: {
            mysql: {
                host: "192.168.0.254",
                port: "",
                database: "account", //数据库名称
                user: "root", //数据库帐号
                password: "Inno3pku", //数据库密码
                prefix: "",
                encoding: "utf8"
            },
            mongo: {

            }
        }
    },
    qingyun_oam_dev:{
        type: "mysql",
        log_sql: true,
        log_connect: true,
        adapter: {
            mysql: {
                host: "192.168.0.254",
                port: "",
                database: "oam", //数据库名称
                user: "root", //数据库帐号
                password: "Inno3pku", //数据库密码
                prefix: "",
                encoding: "utf8"
            },
            mongo: {

            }
        }
    }
};
