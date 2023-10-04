let skills: string[] = ['Bash', 'Counter', 'Healing']; 

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // El simbolo de interrogacion indica que es opcional
};

const strider: Character = {
    name: 'strider',
    hp: 100,
    skills: ['Bash', 'Counter']
};

strider.hometown = 'Rivendell';

console.log(strider)


export {};