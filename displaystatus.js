const result1 = document.getElementById('taz1-result');
const result2 = document.getElementById('taz2-result');
const result3 = document.getElementById('taz3-result');
const result4 = document.getElementById('vertex-result');

function testMe() {
    document.getElementById("taz1_result").innerHTML = "Test!";
}

function getAPI(event) {
    const taz1_api = new XMLHttpRequest();
    const taz1_url = "http://10.40.10.67/api/printer?history=true&limit=2&apikey=5F8B5FEE30BF4E0D9C3C3C0DF2383AB4"
    
    taz1_api.addEventListener("load", function() {
        var result = JSON.parse(this.responseText);
        console.log(result);
        result = JSON.stringify(result);
        document.getElementById("taz1_result").innerHTML = result;
    }
    
    taz1_api.open("get", taz1_url, true);
    taz1_api.send();
}
