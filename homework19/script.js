const HAMBURGER = {
    small: {
        price: 5,
        calories: 20
    },
    big: {
        price: 10,
        calories: 40
    },
    cheese: {
        price: 1,
        calories: 20
    },
    salad: {
        price: 2,
        calories: 5
    },
    potato: {
        price: 1.5,
        calories: 10
    },
    seasoning: {
        price: 1.5,
        calories: 0
    },
    mayonnaise: {
        price: 2,
        calories: 5
    },
};

class Hamburger {
    constructor() {
        this.input();
    }

    result() {
       let value = this.getInfoSum(); 
       return alert(`Your hamburger price is ${value[0]}$ and contains ${value[1]} calories!`);
    }

    getInfoSum() {
        let resultArr = [0, 0];
        for(let key in this) {
            let inner = HAMBURGER[this[key]];
            for(let innerKey in inner) {
                if(innerKey === 'price') {
                    resultArr[0] += inner[innerKey];
                } 
                else {
                    resultArr[1] += inner[innerKey];
                }
            }
        }
        return resultArr;   
    }

    input() {
        do {
            this.type = prompt("Enter hamburger type: small or big.").replaceAll(" ", "").toLowerCase();
        } while (this.type !== "big" && this.type !== "small");

        do {
            this.ingredient = prompt('Enter hamburger ingredient: cheese, salad or potato.').replaceAll(" ", "").toLowerCase();
        } while (this.ingredient !== "cheese" && this.ingredient !== "salad" && this.ingredient !== "potato");

        let addConfirm = confirm(`Do you want to add seasoning or mayonnaise?`);

        if(addConfirm) {
            do {
                this.add = prompt("Enter hamburger add: seasoning or mayonnaise.").replaceAll(" ", "").toLowerCase();
            } while (this.add !== "seasoning" && this.add !== "mayonnaise");
        }; 

		return this;
	}   
}

let newHamburger = new Hamburger();

newHamburger.result();
