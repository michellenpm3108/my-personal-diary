const entryForm = document.getElementById('entry-form')
const entryTextbox = document.querySelector('.entry-textbox')
const entrySection = document.querySelector('.entry-section')
const entryButtonSection = document.querySelector('.entry-btn-section')
let count=1


entryForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entryDiv.className = 'single-entry';
    entrySection.append(entryDiv);
    entryTextbox.value='';

    const entryButton = document.createElement('button')
    entryButton.innerText = 'Day ' + count
    entryButton.className = 'entry-btn'
    entryButtonSection.append(entryButton)
    count++

    
    entryButton.addEventListener('click', function(){
        const allEntries = document.querySelectorAll('.single-entry')
        for (let index = 0 ; index < allEntries.length ; index++) {
            allEntries[index].style.display = 'none'
        }
        entryDiv.style.display='block'
    })

    

})