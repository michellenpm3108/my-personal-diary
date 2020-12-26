const entryForm = document.getElementById('entry-form')
const entrySection = document.querySelector('.entry-section')
const entryTextbox = document.querySelector('.entry-textbox')
const entryBtnSection = document.querySelector('.entry-btn-section')
let count = 1


entryForm.addEventListener('submit', function(event){
    event.preventDefault();
    const singleEntry = document.createElement('div');
    singleEntry.innerHTML = entryTextbox.value;
    singleEntry.className = 'single-entry';
    entrySection.append(singleEntry);
    singleEntry.style.display='none';
    entryTextbox.value=''

    const entryBtn = document.createElement('button');
    entryBtn.textContent = 'day ' + count;
    entryBtn.className = 'entry-btn'
    count++
    entryBtnSection.append(entryBtn)

    entryBtn.addEventListener('click', function(){
        const multipleEntry = document.querySelectorAll('.single-entry')
        
        for (let i=0 ; i<multipleEntry.length ; i++) {
            multipleEntry[i].style.display = 'none'
        }
        singleEntry.style.display = 'block'
    })
    
})