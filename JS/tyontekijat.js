function XD() {
    var x = document.getElementById('asdf1').value;
    const nameCapitalized = x.charAt(0).toUpperCase() + x.slice(1)
    if(x == "") {
        alert("Täytä hakukenttä.");
        return false;
    } else {

    if(x != document.getElementById('asdf1').value) {
        x = document.getElementById('asdf1').value;
        nameCapitalized = x.charAt(0).toUpperCase() + x.slice(1)
    } else {
        console.log("xd");
    }
    var url = "http://localhost:3000/posts/"+nameCapitalized;
    window.open(url,"_self");
    }
}