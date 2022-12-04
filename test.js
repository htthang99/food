// search
var ip1 = document.getElementById('ip1');
var btn1 = document.getElementById('btn1');
var frm1 = document.getElementById('frm1');
btn1.onclick = function() {
    if(ip1.value.length > 0) {
        frm1.submit();
        ip1.value = null;
    }
    else {
        alert("Enter search");
        ip1.focus();
    }
}

ip1.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        btn1.click();
    }
})