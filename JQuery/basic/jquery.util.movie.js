jQuery.noConflict();
/* 此時的$不再是jquery中的$，而是閉包中的$，而閉包中的$又是jQuery的對象 */
(function($) {
    $.say = function(hello) {
        alert('hello ' + hello);
    }

    /*
       如果有一個插件，參數很多，而且很多參數並不是必須的，
       如此在調用的時候就會非常麻煩。
       $.complex("aa");
       $.complex("aa",null,null,null,null,null,null,"abc");
    */
    // $.complex = function(a1,a2,a3,a4,a5,a6,a7,a8){}

    /*
	 *	插件的參數的解決方法一般是通過options來定義。
	 *	options中一般使用json來定義，這個時候就可以更靈活來確定參數個數。
     */

    $.complex = function(p1, options, p2) {
    	/*
    	 * 在代碼中，通過extend方法來完成覆蓋
    	 */
        var settings = $.extend({ a2: "ok", a3: "hello", a4: "你好" }, options || {});
        alert(p1 + p2);
        alert(settings.a2 + "," + settings.a3 + "," + settings.a4);
    }

})(jQuery); /* 傳入jQuery作為參數 */
