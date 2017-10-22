(function(){
    let i;
for(let i = 0;i<10;i++){
    for(let i = 0;i<10;i++){
        console.log(i);
    }
}
var a=1;
interface IAngel{
    name:string;
}
class Point{
    angel:IAngel;
    constructor(){
        
    }
    run(){
        return this.angel;
    }
    setAngel(value: IAngel){
        this.angel=value;
    }
    getAngel(): string{
        return this.angel.name;
    }
    
}
var p = new Point();
p.setAngel({name:"Will"});
// p.run();
console.log(p.getAngel());
});
