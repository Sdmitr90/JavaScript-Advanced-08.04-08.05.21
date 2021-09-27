let form = document.forms.Hamburgers;

class Hamburger {
    constructor() {
    }
    getSize() {
        let size = [
            { id: 6, name: "small", price: 50, calories: 20 },
            { id: 7, name: "big", price: 100, calories: 40 },
        ];
        let elementsSize = form.elements.size;
        let sizePrices = 0;
        let sizeCalories = 0;
        size.find(i => {
            if (i.name === elementsSize.value) {
                sizePrices = i.price;
                sizeCalories = i.calories;
            }
        });
        return [sizePrices, sizeCalories];
    }

    addTopping() {
        let topping = [
            { id: 4, name: "seasoning", price: 15, calories: 0 },
            { id: 5, name: "chemayoese", price: 20, calories: 5 }
        ];
        let elementsTopping = document.querySelectorAll('.topping');
        let toppingPrices = 0;
        let toppingCalories = 0;
        elementsTopping.forEach(e => {
            if (e.checked) {
                topping.find(i => {
                    if (i.name === e.value) {
                        toppingPrices = toppingPrices + i.price;
                        toppingCalories = toppingPrices + i.calories;
                    }
                });

            }

        });
        return [toppingPrices, toppingCalories];
    }

    getStuffing() {
        let stuffing = [
            { id: 1, name: "cheese", price: 10, calories: 20 },
            { id: 2, name: "salad", price: 20, calories: 5 },
            { id: 3, name: "potato", price: 15, calories: 10 },
        ];
        let elementsStuffing = document.querySelectorAll('.stuffing');
        let stuffingPrices = 0;
        let stuffingCalories = 0;
        elementsStuffing.forEach(e => {
            if (e.checked) {
                stuffing.find(i => {
                    if (i.name === e.value) {
                        stuffingPrices = stuffingPrices + i.price;
                        stuffingCalories = stuffingCalories + i.calories;
                    }
                });
            }

        });
        return [stuffingPrices, stuffingCalories];
    }
    calculatePrice() {
        return this.getSize()[0] + this.getStuffing()[0] + this.addTopping()[0];

    }
    calculateCalories() {
        return this.getSize()[1] + this.getStuffing()[1] + this.addTopping()[1];
    }

    static buttonCalculate() {
        let burger = new Hamburger();
        console.log(burger.addTopping());
        console.log(burger.getStuffing());
        console.log(burger.getSize());
        console.log(`Стоимость Вашей пиццы ${burger.calculatePrice()} рублей`);
        console.log(`В Вашей пицце ${burger.calculateCalories()} калорий`);
        document.getElementById("text").innerHTML = `Стоимость Вашей пиццы ${burger.calculatePrice()} рублей, в Вашей пицце ${burger.calculateCalories()} калорий`;
    }

    static removeTopping() {
        $('.stuffing').prop('checked', false);
        $('.topping').prop('checked', false);
        document.getElementById("text").innerHTML = "";
    }
}

$('#start').click(Hamburger.buttonCalculate);
$('#delete').click(Hamburger.removeTopping);

