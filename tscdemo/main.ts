// declare var $:any;
(function(){
	const a: any={};
	a.test = 1;
})();

enum Color{
    red=14,blue=11,green=12
}
var color:Color.green

var color_str = Color[color]

let x: number = 1
let b: string = 'string'
let c=`${x} ---> ${b}`
console.log(c);
var d = x+1 + '---->' +b;
console.log(d);

