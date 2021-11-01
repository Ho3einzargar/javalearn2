class Animal{
    
    showname(){
        alert("Animal");
    }

    constructor(){
        this.showname();
    }
}
class Rabbit extends Animal{
    showname(){
        alert('rabbit');
    }
}
new Animal();
new Rabbit();




