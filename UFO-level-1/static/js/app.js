// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);

// Step 1: Loop Through `data` and console.log each UFO report object
//tableData.forEach(function(ufoReport) {
    //console.log(ufoReport);
//});

// Step 2:  Use d3 to append one table row `tr` for each UFO report object

//tableData.forEach(function(ufoReport) {
    //console.log(ufoReport);
    //var row = tbody.append("tr");
//});

// Step 3:  Use `Object.entries` to console.log each UFO report value
//tableData.forEach(function(ufoReport) {
   //console.log(ufoReport);
   //var row = tbody.append("tr");

   //Object.entries(ufoReport).forEach(function([key, value]) {
    //console.log(key, value);
   //});
//});

// Step 4: Use d3 to update each cell's text with
// UFO report values (date, city, state, country, shape, Duration, comments)
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
 
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);

    // Append a cell to the row for each value
      // in the UFO report object
        var cell = row.append("td");
        cell.text(value);
     });
 });

// Select the button.. linking to html button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", function(event){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    tbody.html("");
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    // Use the form input to filter the data by date
    var filteredData = tableData.filter(info => info.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(dateData){
        var row=tbody.append("tr");
        Object.entries(dateData).forEach(function([key,value]){
        var cell=row.append("td");
        cell.text(value);
            });
        });
});

// Method II
// Input from button 
//button.on('click', function() {
    // make variables for inputs and values for date and city
    //var dateInput = d3.select('#datetime');
    //var dateValue = dateInput.property('value');

 // Filter data by date
 //var filtered = tableData.filter(item => item.datetime === dateValue)

  // Trying to clear filter 
  //tbody.html(``);
  // Lastly adding the data. 
  //filtered.forEach( item => {
      //var tr = tbody.append('tr');
      //tr.append('td').text(item.datetime);
      //tr.append('td').text(item.city);
      //tr.append('td').text(item.state);
      //tr.append('td').text(item.shape);
      //tr.append('td').text(item.durationMinutes);
      //tr.append('td').text(item.comments);
      //tr.append('td').text(item.country);
  //});
//});

