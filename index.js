const addButton = document.querySelector('#add');
const updatelsdata = () =>{
    const textareaData =document.querySelectorAll('textarea');
    const notes = [];

    textareaData.forEach(() =>{
        return notes.push(note.value);
    })
    console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes))
}
const addNewNote= (text = 'Add Text here') =>{
    const note =document.createElement('div');
    note.classList.add('note');
    const htmlData =`<div class="operations">
        <button class="edit"> <i class="fas fa-edit"></i> </button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>`;
        note.insertAdjacentHTML('afterbegin',htmlData);
        // console.log(note);
        const editButton = note.querySelector('.edit');
        const delButton = note.querySelector('.delete');
        const mainDiv =note.querySelector('.main');
        const textarea = note.querySelector('textarea');

        delButton.addEventListener('click',() =>{
            note.remove();
        })
        textarea.value=text;
        mainDiv.innerHTML=text;
        editButton.addEventListener('click',() =>{
            mainDiv.classList.toggle('hidden');
            textarea.classList.toggle('hidden');
        })
        textarea.addEventListener('change', () =>{
            constvalue =event.target.value;
            console.log(value);
        })
        document.body.appendChild(note);
}
const notes =JSON.parse(localStorage.getItem('notes'));
if(notes){notes.forEach((note) => addNewNote())};
addButton.addEventListener('click',() =>
    addNewNote()
  )