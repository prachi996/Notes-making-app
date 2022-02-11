addbtn = document.getElementById('addbtn');
shownotes()
addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes')
    let addtitle=document.getElementById('addtitle')
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes)
    }
    let myobj={
        title:addtitle.value,
        text:addtxt.value
    }
     notesobj.push(myobj)

    localStorage.setItem('notes', JSON.stringify(notesobj));
    addtxt.value = "";
    addtitle.value="";
    console.log(notesobj);
    shownotes();

});

function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-2" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title"> ${index+1}.${element.title }</h5>
              <p class="card-text"> ${element.text}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary mx-2">Delete</buton>
          </div>
      </div>`
    });
    let noteselm = document.getElementById('notes')
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = "Nothing to show! Use add note section above to add notes.";
    }
}

//function to delete note
function deleteNote(index){
    
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
   deleten=confirm('Are you sure to Delete the Note')
   if(deleten){
    notesobj.splice(index,1)
    localStorage.setItem('notes', JSON.stringify(notesobj));
    shownotes()
   }
}