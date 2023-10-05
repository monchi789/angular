import { Product, taxCalcutalation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    }, 
    {
        description: 'iPad Air',
        price: 150
    }
];



// Tax = 0.15%
const [total, tax] = taxCalcutalation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);

