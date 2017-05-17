
function toggleSet() {
    document.getElementById('business1').style.display = 'none';
    document.getElementById('business2').style.display = 'none';
    document.getElementById('business3').style.display = 'none';
}
function showToggle(id) {
    var x = document.getElementsByClassName(id);
    for(i=0;i<x.length;i++){
        if (x[i].style.display === 'none') {
            $(x[i]).show(500);
            /*x.style.display = 'block';*/
        } else {
            $(x[i]).hide(500);
        }
    }
}
