

tablepromise = d3.json("classData.json")

tablepromise.then(

function(data)
    {
        maketable(data);
        console.log("good", (data))
        
        getPicture(data);
    }




)













var maketable = function (data)
{
d3.select("#table")
.append("table")
.attr( "id" ,"#table")
d3.select("#table")
.selectAll("tr")
.data(data)
.enter()
.append("tr")
}

var getPicture = function(data)
{
    d3.select("#table")
    .selectAll("picture")
    .data(data)
    .enter()
    .append("picture")
    .attr(getPicture)
    .append("tr")
}


