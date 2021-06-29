let table = document.getElementById('table');

table.addEventListener('click', function(event) {
    let td = event.target.closest('td');

    if (!td) return;

    if (!table.contains(td)) return;

    paintTarget(td);
});


function paintTarget(td) {
    let paintedTd = td;

    paintedTd.classList.add('paintTarget');
};