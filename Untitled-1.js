
console.log("123");
function MyFunc() {
    var obj = {
        a: undefined,
        b: 0
    };
    return {
        get_a: function() {
            return obj.a * obj.a;
        },
        set_a: function(a) {
            var c;
            if (a !== undefined) { obj.a = a; }
        }
    };
}