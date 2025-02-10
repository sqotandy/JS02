const inputEl = document.getElementById('content');
const createBtn = document.getElementById('plus');
const listEl = document.getElementById('list');

function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function getNoteTemplate(note, index) {
    const title = escapeHTML(note.title); 
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${title}</span>
            <span>
                <span class="btn btn-small btn-${note.completed ? 'info' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
            </span>
        </li>
    `;
}


createBtn.onclick = function () {
    if (inputEl.value.length === 0) {
        return;
    }
    const object = {
        title: inputEl.value, 
        completed: false,
    };
    notes.push(object);
    render();
    inputEl.value = '';
};

listEl.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index);
        const type = event.target.dataset.type;
        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed;
        } else if (type === 'remove') {
            notes.splice(index, 1);
        }
    }
    render();
};

const notes = [
    {
        title: 'Первое дело',
        completed: false,
    },
    {
        title: 'Второе дело',
        completed: true,
    },
];

function render() {
    listEl.innerHTML = '';
    if (notes.length === 0) {
        listEl.innerHTML = '<p>Нет элементов</p>';
    }
    for (let i = 0; i < notes.length; i++) {
        listEl.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
    }
}

render();