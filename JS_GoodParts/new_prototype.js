// 使用舊物件原型產生新物件的方法
var stooge = {
    "first-name": "Joe",
    "last-name": "Howard"
}
if (typeof Object.beget != 'function') {
    Object.beget = function(o) {
        var F = function() {};
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.beget(stooge);

// arguments array
var sum = function() {
    var i, sum = 0;
    for (i = 0; i<arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
}
// document.writeln(sum(4, 8, 15, 16, 23, 42));

// 產生整數
Number.method('integer', function() {
    return Math[this < 0 ? 'ceiling' : 'floor'](this);
})
// document.writeln((-10 / 3).integer());

//消除字串空格之函式
String.method('trim', function() {
    return this.replace(/^\s+|\s+$/g, '');
})
// document.writeln('"' + "  neat  ".trim() + '"');

//河內塔
var hanoi = function(disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
}

// getElementByAttribute
var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSibling();
    }
};
var getElementByAttribute = function(att, value) {
    var result = [];
    walk_the_DOM(document.body, function(node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });
    return results;
}


String.method('deentityify', function() {
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };
    return function() {
        return this.replace(/&([^&;]+);/g, function(a, b) {
            var r = entity[b];
            return typeof r === 'string' ? r : a;
        });
    };
}());
document.writeln('&lt;&quot;&gt;'.deentityify());
