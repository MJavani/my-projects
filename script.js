var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
   console.log(data);
    document.getElementById("id");
    var name = data[1];
    console.log(name);
    var totalPopu = 0;
    for(i in data)
    {
        totalPopu = totalPopu + data[i].population
    }
    console.log("total population is " + totalPopu);
}