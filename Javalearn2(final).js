let Animal = {
    sayhi(){
        alert('im an Animal');
    }
};
let Rabbit = {
    __proto__ : Animal,
    sayhi(){
    alert('im an Animal');
    }
};
let plant = {
    sayhi(){
        alert('im a plant');
    }
};



let tree = {
    __proto__ : plant,
    sayhi(){
        alert('im a plant');
    }

};

Rabbit.sayhi();
tree.sayhi();


