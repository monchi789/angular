export class Person {
    public name: string
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

export class Hero extends Person {
    
}

// Hay una forma corta de definir clases en TypeScript
// export class Person {
//     constructor(public name: string, private address: string) {}
// }

const ironman = new Hero('Ironman', 'New York')

console.log(ironman);
