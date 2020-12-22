const entryForm = document.getElementById('entry-form')
const entryTextBox = document.querySelector('.entry-textbox')
const entrySection = document.querySelector('.entry-section')
const entryBtnSection = document.querySelector('.entry-btn-section')

let count = 1

entryForm.addEventListener('submit', function(event){
    event.preventDefault(event)

    let entryDiv = document.createElement('div')
    entryDiv.textContent = entryTextBox.value
    entryDiv.className='single-entry'
    entryDiv.style.display='none'
    entrySection.append(entryDiv)

    entryTextBox.value=''

    let entryBtn = document.createElement('button')
    entryBtn.className='entry-btn'
    entryBtn.textContent = 'day' + count
    count++
    entryBtnSection.append(entryBtn)

    entryBtn.addEventListener('click', function(){
        const allEntries = document.querySelectorAll('.single-entry')
        for (let i=0 ; i<allEntries.length ; i++) {
            allEntries[i].style.display='none'
        }
        entryDiv.style.display='block'
    })
})