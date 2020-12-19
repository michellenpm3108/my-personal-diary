const entryForm = document.getElementById('entry-form')
const entryTextbox = document.getElementById('entry-textbox')
const submitBtn = document.querySelector('btn')
const entrySection = document.getElementById('entry-section')
const entryBtnSection = document.getElementById('entryBtnSection')


function addEntryToDom(event) {
    event.preventDefault()
    let newEntryDiv = document.createElement('div')
    newEntryDiv.textContent = entryTextbox.value
    newEntryDiv.className = 'new-entry'
    newEntryDiv.style.display = 'none'
    entrySection.append(newEntryDiv)
    entryTextbox.value = ''
    let entryBtn = document.createElement('button')
    entryBtn.className = 'entryBtn'
    entryBtnSection.append(entryBtn)
}
entryForm.addEventListener('submit', addEntryToDom)
