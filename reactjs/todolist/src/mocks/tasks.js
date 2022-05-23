import { v4 as uuidv4 } from 'uuid';

let items = [
    {
        id: uuidv4(),
        name: 'A Task 1',
        level: 0,
    },
    {
        id: uuidv4(),
        name: 'C Task 4',
        level: 2,
    },
    {
        id: uuidv4(),
        name: 'D Task 3',
        level: 1,
    },
    {
        id: uuidv4(),
        name: 'B Task 2',
        level: 0,
    }
];
export default items;