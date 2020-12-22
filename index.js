const entryForm = document.getElementById('entry-form')
const entryTextBox = document.querySelector('.entry-textbox')
const entrySection = document.querySelector('.entry-section')
const entryBtnSection = document.querySelector('.entry-btn-section')
let count = 1
entryForm.addEventListener('submit', function(event){
    event.preventDefault(event)
    let entryDiv = document.createElement('div')
    entryDiv.textContent = entryTextBox.value
    entryDiv.style.display='none'
    entrySection.append(entryDiv)
    let entryBtn = document.createElement('button')
    entryBtn.textContent = 'day' + count
    count++
    entryBtnSection.append(entryBtn)
    entryBtn.addEventListener('click', function(){
        entryDiv.style.display='block'
    })
})