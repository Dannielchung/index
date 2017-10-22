(function($) {
    $.fixedTopicWidth = function(str, options) {
        //(abcdddddddddddddddddd,12,".") --> (abcdddd...)
        var setting = $.extend({ length: 50, fill: null, fillLength: 3 }, options || {})
        var pos = setting.length - str.length;
        if (pos > 0) {
            return str;
        } else {
            if (setting.fill) {
                var fs = setting.fill;
                for (var i = 0; i < setting.fillLength; i++) {
                    fs += setting.fill;
                }
                return (str.substr(0, setting.length - 3) + fs);
            } else {
                return str.substr(0, setting.length);
            }
        }
    }
    $.fn.formatTopic = function(options) {
        this.each(function(index, el) {
            /* 這個時候的this就不再是包裝及對象，而是這個閉包對象
            此時閉包對象的引用是一個html的節點，要訪問就需要使用$(this) */
            $(this).html($.fixedTopicWidth($(this).html(), options));
        });
    }

    $.fn.setColor = function() {
        /* 此時的this對象，指的是整個包裝及對象，已經被封裝為包裝集，就不用再使用$(this)來封裝 */
        this.css("color", "#0f0");
        /* 基於包裝集的韓式一定要能夠支持鍊式結構 */
        return this;
    }

    /* 如果state為true就表示readonly，否則表示取消readonly */

    $.fn.setReadOnly = function(state) {
        // 1.找到所有的文本框
        return this.filter("input:text")
            .prop("readOnly", state)
            .css('opacity', state ? 0.5 : 1.0);
    }

})(jQuery); /* 傳入jQuery作為參數 */
