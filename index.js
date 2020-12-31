const entryForm = document.getElementById('entry-form')
const entryTextbox = document.querySelector('.entry-textbox')
const entrySection = document.querySelector('.entry-section')
const entryBtnSection = document.querySelector('.entry-btn-section')
let count = 1

entryForm.addEventListener('submit', function(event){
    event.preventDefault(event);
    if (entryTextbox.value) {
        const entryDiv = document.createElement('div');
        entryDiv.textContent = entryTextbox.value;
        entryDiv.classList='single-entry'
        entrySection.append(entryDiv)

        entryTextbox.value=''
        entryDiv.style.display='none'

        const entryBtn = document.createElement('button')
        entryBtn.textContent = 'day ' + count
        count++
        entryBtnSection.append(entryBtn)

        entryBtn.addEventListener('click', function(){
            const allEntries = document.querySelectorAll('.single-entry')
            for (let i=0 ; i<allEntries.length; i++) {
                allEntries[i].style.display = 'none';
            }
            entryDiv.style.display = 'block'
            
        })
    }
})

