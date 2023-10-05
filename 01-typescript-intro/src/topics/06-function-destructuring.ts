export interface Product {
    description: string;
    price: number;
    
}


// const phone: Product = {
//     description: 'Nokia A1',
//     price: 150.0
// }

// const tablet: Product = {
//     description: 'iPad Air',
//     price: 250.0
// }

export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


export function taxCalcutalation(options: TaxCalculationOptions): [number, number] {
    
    const {products, tax} = options;    

    let total = 0;

    products.forEach(({price}) => {
        total += price
    });

    return [total, total*tax]

}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const result = taxCalcutalation({
//     products: shoppingCart,
//     tax
// });

// const [products, taxTotal] = result;

// console.log('Total: ', products, 'Tax: ', taxTotal);

