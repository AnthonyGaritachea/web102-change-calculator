
function calculateChange() {
                
    var amountDue = parseFloat(document.getElementById('amount-due').value);
    var amountReceived = parseFloat(document.getElementById('amount-received').value);
    
    
    var totalAmountDue = (amountReceived - amountDue) * 100; // multiplying by 100 gets rid of the decimal - turns into integer 
                                                             // 928 =  (40.72 - 50.00) * 100 
var changeDue = {
    dollars: 100,
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1,
};
               
var dollar = Math.floor(totalAmountDue/changeDue.dollars);            // 9 = Math.floor(928 / 100) checking how many times dollars fits into totalAmountDue
    totalAmountDue = totalAmountDue -(dollar * changeDue.dollars);    // 28 = 928 - (9 * 100) updating totalAmountDue

var quarter = Math.floor(totalAmountDue/changeDue.quarters);          //  1 = Math.floor(28 / 25 ) checking how many times quarters fits into totalAmountDue
    totalAmountDue = totalAmountDue -(quarter * changeDue.quarters);  //  3 =  28  - (1 * 25) updating totalAmountDue

var dime = Math.floor(totalAmountDue/changeDue.dimes);
    totalAmountDue = totalAmountDue -(dime * changeDue.dimes);
 
var nickel = Math.floor(totalAmountDue/changeDue.nickels);
    totalAmountDue = totalAmountDue -(nickel * changeDue.nickels);

var penny = Math.round(totalAmountDue/changeDue.pennies);             // 3 = Math.round( 3 / 1) checking how many pennies fit into totalAmountDue
    totalAmountDue = totalAmountDue -(penny * changeDue.pennies);     // 0 = 3 - (3. 1) updating toalAmountDue

             // displays results
     document.getElementById('dollars-output').innerHTML = dollar;
     document.getElementById('quarters-output').innerHTML = quarter;
     document.getElementById('dimes-output').innerHTML = dime;
     document.getElementById('nickels-output').innerHTML = nickel;
     document.getElementById('pennies-output').innerHTML = penny;
}


