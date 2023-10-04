function addNumbers(a:number, b: number) {
    return a + b;
};

const addNumbersArrow = (a: number, b:number):string => {
    return `${a + b}`;
};

function multiply(firstName: number, secondNumber?: number, base: number = 2) {
    return firstName * base;
};

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5)

// console.log({result, result2, multiplyResult});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;

};

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;

};

const strider: Character = {
    name: 'Strider',
    hp: 60,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }
};

healCharacter(strider, 20);

strider.showHp();

export {};