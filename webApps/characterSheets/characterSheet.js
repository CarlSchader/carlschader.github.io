var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var response = JSON.parse(xhttp.responseText)
       console.log(response)
    }
};
xhttp.open("GET", "https://carlschader.github.io/webApps/characterSheets/characterSheet.json", true);
xhttp.send();