var table = {
	evtries:[],
	addEntry:function(key, value){
		this.entries.push({key: key,value:value});
	},
	forEach:function(f,thisArg){
		var entries = this.entries;
		for(var i = 0, n = entries.length;i<n;i++){
			var entry = entries[i];
			f.call(thisArg,entry.key,entry.value,i);
		}
	}
};

table table1 = new table();
console.log(table1);

var aIndex = "a".charCodeAt(0);
function buildString(n,callback){
	var result = "";
	for(var i = 0;i < n; i++){
		result += callback(i);
	}
}
var alphabet = buildString(26,function(i){
	return String.fromCharCode(aIndex + i);
});
alphabet;

var digits = buildString(10,function(i){
	return  i;
});
digits;

var random = buildString(8,function(){
	return String.fromCharCode(Math.floor(Math.random()*26)+aIndex);
});
random;


function callMethod(obj, method){
	var args = [].slice.call(arguments,2);
	return obj[method].apply(obj,args);
}
var obj = {
	add:function(x,y){return x+y;}
};
callMethod(obj,"add",17,25);


