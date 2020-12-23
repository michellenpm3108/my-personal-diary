const entryTextbox = document.querySelector('.entry-textbox')
const entryForm = document.getElementById('entry-form')
const entrySection = document.querySelector('.entry-section')
const entryBtnSection = document.querySelector('.entry-btn-section')
let count=1

entryForm.addEventListener('submit', function(event){
    event.preventDefault(event);
    let entryDiv = document.createElement('div')
    entryDiv.textContent= entryTextbox.value
    entryDiv.className='single-entry'
    entryDiv.style.display='none'
    entrySection.append(entryDiv)

    let entryButton = document.createElement('button')
    entryButton.className='entry-btn'
    entryButton.textContent = 'day' + count
    count++
    entryBtnSection.append(entryButton)

    entryButton.addEventListener('click', function(){
        const multipleEntries = document.querySelectorAll('.single-entry')
        for (let i=0; i < multipleEntries.length ; i++) {
            multipleEntries[i].style.display='none'
        }
        entryDiv.style.display='block'
    })

})