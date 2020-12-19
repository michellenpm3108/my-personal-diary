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
    let newEntryDiv = document.createElement('div')
    newEntryDiv.textContent = entryTextbox.value
    newEntryDiv.className = 'new-entry'
    // newEntryDiv.style.display = 'none'
    entrySection.append(newEntryDiv)
    entryTextbox.value = ''
}
entryForm.addEventListener('submit', addEntryToDom)