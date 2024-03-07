const harry = {
    name: 'Harry Potter',
    hair: 'black',
}

const hermoine = {
    name: 'Hermoine Granger',
    hair: 'brown',
}

const ron = {
    name: 'Ron Weasley',
    hair: 'red',
}

// =>

const array = [
    {
        name: 'Harry Potter',
        hair: 'black',
    },
    {
        name: 'Hermoine Granger',
        hair: 'brown',
    },
    {
        name: 'Ron Weasley',
        hair: 'red',
    }
]

function updateList(array) {
    const list = document.getElementById('list');

    array.forEach(notMuggle => {
        const listItem = document.createElement('li');
        listItem.textContent = notMuggle.name;
        listItem.style.color = notMuggle.hair;
        list.appendChild(listItem);
    });
}

updateList(array);
