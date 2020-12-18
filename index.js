const entryForm = document.getElementById('entry-form')
const entryTextbox = document.getElementById('entry-textbox')
const submitBtn = document.querySelector('btn')
const entrySection = document.getElementById('entry-section')


entryForm.addEventListener('submit', function(event){
    event.preventDefault()
    let newEntry = document.createElement('div')
    newEntry.className = 'single-entry'
    newEntry.textContent= entryTextbox.value
    entrySection.append(newEntry)
})

