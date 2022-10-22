// import data from data.js
const tableData = data;

// reference HTML table using D3
var tbody = d3.select("tbody")

function buildTable(data) {
    //clear out any existing data
    tbody.html("");

//loop thru each object in dataand add/append row and cells for each value
data.forEach((dataRow) => {
    //add/append a row to the table
    let row = tbody.append("tr");

    //loop thru and add each field in dataRow as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
});

}

//function for when button to sort by date is clicked
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick)

//builds table when page loads
buildTable(tableData);



