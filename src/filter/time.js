/*
 * time filter
 * @creatAt 2017/07/03
 */

import Vue from 'vue'
import moment from 'moment'

moment.lang('zh-cn');

Vue.filter('moment', function(value, formatString) {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    return moment(value).format(formatString);
});

Vue.filter('fromNow', function(value, formatString) {
    let t = moment(value).startOf('time').fromNow();
    if (t.indexOf('秒') !== -1) {
        t = '刚刚';
    }
    return t;
});