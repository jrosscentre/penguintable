

tablepromise = d3.json("classData.json")

tablepromise.then(

function(data)
    {
        maketable(data);
        console.log("good", (data))
        
        
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

