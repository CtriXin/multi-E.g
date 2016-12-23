'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        let nowunix = Math.round(new Date().getTime());//获取当前时间时间戳
        let d = new Date();
        console.log(d,nowunix);
        console.log(formatMonth(d));
        return this.display();
    }

}