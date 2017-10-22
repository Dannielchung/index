// declare var $:any;
(function () {
    const a = {};
    a.test = 1;
})();
var Color;
(function (Color) {
    Color[Color["red"] = 14] = "red";
    Color[Color["blue"] = 11] = "blue";
    Color[Color["green"] = 12] = "green";
})(Color || (Color = {}));
var color;
var color_str = Color[color];
let x = 1;
let b = 'string';
let c = `${x} ---> ${b}`;
console.log(c);
var d = x + 1 + '---->' + b;
console.log(d);
//# sourceMappingURL=main.js.map