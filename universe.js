

$(document).ready(
    function(){
        $('#searchbar').hide()
    }
);

function ShowAndHide() {
    var x = document.getElementById('searchbar');
    $('#searchbar').val('');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
};