const actors = [
    {id: 11, name: "illeana", phone:123},
    {id: 21, name: "alia", phone:456},
    {id: 31, name: "kriti", phone:789},
    {id: 41, name: "genelia", phone:369}
]
//finding elements & more from array objects
const ids = actors.map(x => x.id);
const names = actors.map(x => x.name);

const filterId = actors.filter(x => x.id> 25);
//find command find the first matching elements of the array
const findId = actors.find(x => x.id> 25);
console.log(findId);
