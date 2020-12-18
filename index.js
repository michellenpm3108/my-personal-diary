const entryTextbox = document.querySelector('.entry-textbox')
const submitBtn = document.querySelector('btn')
const entrySection = document.querySelector('entry-section')

submitBtn.addEventListener('submit', function(){
    const newEntry = document.createElement('span')
    newEntry.innerText = entryTextbox.value
    entrySection.appendChild(newEntry)
})