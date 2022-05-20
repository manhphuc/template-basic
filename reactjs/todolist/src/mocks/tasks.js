import { v4 as uuidv4 } from 'uuid';

let items = [
    {
        id: uuidv4(),
        name: 'Task 1',
        level: 0,
    },
    {
        id: uuidv4(),
        name: 'Task 2',
        level: 2,
    },
    {
        id: uuidv4(),
        name: 'Task 3',
        level: 1,
    }
];
export default items;