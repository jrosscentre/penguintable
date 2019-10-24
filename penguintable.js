

tablepromise = d3.json("classData.json")

tablepromise.then(

function(data)
    {
        console.log("good", (data))
        makerow(data);
        meanhwgrade(data);
    }
)


var makerow = function (data)
{
    console.log("works")
    var table = d3.select("#table")
.selectAll("tr")
.data(data)
.enter()
.append("tr")

table.append("td")
.append("img")
.attr("src", function(d)
     {return d.picture;})

table.append("td")
.append("p")
.text(function (d)
     {return meanhwgrade(d);})
    
table.append("td")
    .append("p")
    .text(function (d)
         {return meanquizgrade(d)})
table.append("td")
    .append("p")
    .text(function (d)
         {return meantestgrade(d)})
table.append("td")
    .append("p")
    .text(function (d)
         {return finalexamgrade(d)})
table.append("td")
    .append("p")
    .text(function(d)
         {return weightedtotalgrade(d)})
    .style("color",function(d)
          {
    var troublegrade = weightedtotalgrade(d)
            if (troublegrade<70){
                return "red"
            }
})
}


var meanhwgrade = function(data)
{
    return d3.mean(data.homework.map(getallgrade))
    
}

var meanquizgrade = function(data)
{
    return d3.mean(data.quizes.map(getallgrade))
}

var meantestgrade = function(data)
{
    return d3.mean(data.test.map(getallgrade))
}

var finalexamgrade = function(data)
{
    return data.final.map(getallgrade);
}


var weightedhw = function(data)
{
    return meanhwgrade(data) * .15;
}
var weightedquiz = function (data)
{
    return meanquizgrade(data) * .2;
}
var weightedtest = function (data)
{
    return meantestgrade(data) *.3
}
var weightedfinal = function(data)
{
    return finalexamgrade(data) * .35
}

var weightedtotalgrade = function(data)
{
    return weightedhw(data) + weightedfinal(data) + weightedquiz(data) + weightedtest(data);
}


var getallgrade = function(data)
{
    console.log("works")
    return data.grade;
}




