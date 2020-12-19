const entryForm = document.getElementById('entry-form')
const entryTextbox = document.getElementById('entry-textbox')
const submitBtn = document.querySelector('btn')
const entrySection = document.getElementById('entry-section')


// function addEntryToDom(event){
//     event.preventDefault()
//     let newEntry = document.createElement('div')
//     newEntry.className = 'single-entry'
//     newEntry.textContent= entryTextbox.value
//     entrySection.append(newEntry)
// }
// entryForm.addEventListener('submit', addEntryToDom)

function addEntryToDom(event) {
    event.preventDefault()
    let newEntry = document.createElement('div')
    newEntry.textContent = entryTextbox.value
    newEntry.className = 'new-entry'
    entrySection.append(newEntry)
}
entryForm.addEventListener('submit', addEntryToDom)