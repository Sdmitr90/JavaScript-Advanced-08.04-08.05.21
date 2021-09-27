const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

//  Корзина
//  Корзина
//  Корзина
//  Корзина
//  Корзина
//  Корзина

class Basket {
    constructor(container = '.cart'){
        this.container = container;
        this.goods = [];//массив товаров
        this.allProducts = [];//массив объектов
        this.Counts = [];
        this._basketProducts()
            .then(data => { //data - объект js
                this.goods = {data};
                this.render();
            });
    }
   
    _basketProducts(){
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods.data.contents){
            const productObj = new BasketItem(product);
            this.allProducts.push(productObj);   
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
        const productObj2 = new amountCount(this.goods.data);
        block.insertAdjacentHTML('beforeend', productObj2.render());
    }
}


class BasketItem {
    constructor(product, img = 'https://vpk.name/file/img/u-2314-1431686275.jpg'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.quantity = product.quantity;
        this.img = img;

    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>Стоимость:${this.price} $</p>
                    <p>количество:${this.quantity}</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>         
            `
    }
}

class amountCount {
    constructor(products){
        this.amount = products.amount;
        this.count = products.countGoods;
    }
    render(){
        return `<div class="product-amount">
                    <h3>Общая стоимость: ${this.amount}$</h3>
                    <p>Общее количество: ${this.count}</p>
            </div>         
            `
    }
}

let basket = new Basket();

