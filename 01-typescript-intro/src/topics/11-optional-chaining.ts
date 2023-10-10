export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Cristian',
}

const passenger2: Passenger = {
    name: 'Pedro',
    children: ['Juan', 'Oscar']
}


const returnChildrenNumber = (passenger: Passenger): number => {

    if (!passenger.children) return 0;

    const howManyChildren = passenger.children!.length || 0;

    console.log(howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger1)