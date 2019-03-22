// WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth 
// and we here at `ALIENS-R-REAL` have collected all of the eye-witness 
// reports we could to prove it! All we need to do now is put this information 
// online for the world to see and then the matter will finally be put to rest.

// Create a basic HTML web page 
// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page 
// and then adds new rows of data for each UFO sighting.

// Make sure you have a column for 
// `date/time`, `city`, `state`, `country`, `shape`, and `comment` 

// Use a date form in your HTML document and write JavaScript 
// code that will listen for events and search through the 
// `date/time` column to find rows that match user input.

// Uses a lot of d3 
// Make sure the webpage doesn't refresh itself while adding the new information

// from data.js
var tableData = data;

// get table references using D3
var tableBody = d3.select("tableBody");

function buildTable(data) {
  // clear out any existing data
  tableBody.html("");

  //loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tableBody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date. 
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data and please hope it works.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the new table when the page loads and hope this works properly.
buildTable(tableData);
