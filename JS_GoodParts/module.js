// 設定唯一流水號的方法
var serial_maker = function(){
	var prefix = '';
	var seq = 0;
	return {
		set_prefix: function(p){
			prefix = String(p);
		},
		set_seq: function(s){
			seq = s;
		},
		gensym: function(){
			var result = prefix + seq;
			seq += 1;
			return result;
		}
	};
}();

var seqer = serial_maker();
seqer.set_prefix = 'Q';
seqer.set_seq = 1000;
var unique = seqer.gensym(); //Q1000


Function.method('curry',function(){
	var slice = Array.prototype.slice,
	args = slice.apply(arguments),
	that = this;
	return function(){
		return that.apply(null, args.concat(slice.apply(arguments)));
	};
});
var add1 = add.curry(1);
document.writeln(add1(6));