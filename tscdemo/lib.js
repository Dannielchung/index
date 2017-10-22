// interface JQuery{
// 	abc():void;
// }
// function abc(){
//     console.log('1');
// }
$(function () {
    $('#btn').abc();
    $('#btn').on('click', function (event) {
        if (event.altKey) {
            let txt = event.target;
            setContent(txt.value);
        }
    });
});
var i = 1;
function setContent(txt) {
    let i = 2;
    if (i == 2) {
        let i = 3;
        console.log(i);
    }
    // import main = require("./Users../tscdemo../main/Github/index/tscdemo")
    $('#main').html(txt);
}
//# sourceMappingURL=lib.js.map