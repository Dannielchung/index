(function () {
    let i;
    for (let i = 0; i < 10; i++) {
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
    }
    var a = 1;
    class Point {
        constructor() {
        }
        run() {
            return this.angel;
        }
        setAngel(value) {
            this.angel = value;
        }
        getAngel() {
            return this.angel.name;
        }
    }
    var p = new Point();
    p.setAngel({ name: "Will" });
    // p.run();
    console.log(p.getAngel());
});
//# sourceMappingURL=index.js.map