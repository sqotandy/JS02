// // Theory
// const array = new Array [1, 2 ,3 ,4, 5, 6, 7]
// console.log (array)

const inputEl= document.getElementById('content')
const createBtn = document.getElementById('plus')
const listEl = document.getElementById('list')
// const notes = ['попа', 'пися']

// console.log(inputEl.value)

// function getNoteTemplate (title) {
//     return `<li class="list-group-item d-flex justify-content-between align-items-center">
//           <span>${title}</span>
//           <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//           </span>
//         </li>`
// } 

// function render () {

//     for (let note of notes) {
//     listEl.insertAdjacentHTML('beforeend', getNoteTemplate (note))
// }
// }

// render()

function getNoteTemplate (note,index) {
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="${note.completed ? 'text-decoration-line-through':''}">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${note.completed ? 'info':'success'}"data-index="${index}"data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger"data-index="${index}"data-type="remove">&times;</span>
          </span>
        </li>`
} 


createBtn.onclick = function () {
    if (inputEl.value.length === 0) {
        return 
    }
    const object = {
        title: inputEl.value,
        completed: false,
    }
    notes.push (object) 
    render ()
    inputEl.value = ''
}

listEl.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = (event.target.dataset.type)
        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
            }   else if (type === 'remove') {
                notes.splice(index, 1)
            }
    }
    render()

}

const notes = [{
    title: 'попа',
    completed: false
    },
    {
    title: 'пися',
    completed: true
    },
]

function render () {
    listEl.innerHTML = ''
    if (notes.length === 0 ) {
        listEl.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listEl.insertAdjacentHTML('beforeend', getNoteTemplate (notes[i],i))}
//     for (let note of notes) {
//     listEl.insertAdjacentHTML('beforeend', getNoteTemplate (note))
// }
}
render()

