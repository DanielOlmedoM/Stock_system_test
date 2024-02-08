console.log('Public js')

// Function to perform the search
function searchTable() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.querySelector(".busqueda-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, starting from the second row (index 1)
    for (i = 1; i < tr.length; i++) {
        // Loop through all cells in the current row
        for (j = 0; j < tr[i].cells.length; j++) {
            td = tr[i].cells[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break; // Break the inner loop, no need to check other cells in the row
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

// Attach the search function to the input's "input" event
document.getElementById("search").addEventListener("input", searchTable);

 function addToAnotherTable(button) {
var row = button.parentNode.parentNode;
var cells = row.getElementsByTagName("td");
var sku = cells[0].innerText;
var linea = cells[1].innerText;
var desc = cells[2].innerText;
var conteo = cells[3].innerText;

var anotherTable = document.getElementById("anotherTable");
var newRow = anotherTable.insertRow();
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
cell1.innerHTML = sku;
cell2.innerHTML = linea;
cell3.innerHTML = desc;
cell4.innerHTML = "1";
}

document.getElementById('saveAsHtml').addEventListener('click', function() {
    var table = document.getElementById('anotherTable');
    var tableHtml = table.outerHTML;

    // Create HTML content with other elements before the table
    var htmlContent = '<!DOCTYPE html>\n<html lang="en">\n<head>\n';
    htmlContent += '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
    htmlContent += '<title>Table with Style</title>\n<style>\n';
    htmlContent += 'table { border-collapse: collapse; width: 100%; }\n';
    htmlContent += 'th, td { border: 1px solid black; padding: 8px; text-align: left; }\n';
    htmlContent += '</style>\n</head>\n<body>\n';
    htmlContent += '<img src="logo.png" alt="logo" id="header-logo" style="width: 3rem; height: auto;">';
    htmlContent += '<h1>Cotización</h1>\n';
    htmlContent += '<p>This is a paragraph before the table</p>\n';
    htmlContent += tableHtml; // Append the table HTML
    htmlContent += '\n</body>\n</html>';

    // Create a Blob containing the styled HTML data
    var blob = new Blob([htmlContent], { type: 'text/html' });
    var url = URL.createObjectURL(blob);

    // Create a link element to trigger the download
    var link = document.createElement('a');
    link.href = url;
    link.download = 'table_with_style.html'; // Set the filename for the downloaded file

    // Programmatically trigger a click event on the link
    link.click();

    // Clean up by revoking the URL
    URL.revokeObjectURL(url);
});