// listen for submit
document.querySelector('.loan-form').addEventListener('submit',function(e){
    
    //hide results 

document.getElementById('results').style.display='none';

    //show results 
    document.getElementById('loading').style.display='block';

    setTimeout(calculateResults, 2000);

    
    
    e.preventDefault();

});

//console.log(form)



// Calculate Results 
function calculateResults(){
    //console.log("calculate****")


//UI Vars
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');



const principal = parseFloat(amount.value);

const calculateInterest = parseFloat(interest.value)/100/12;
const calculatPayment = parseFloat(years.value)*12;


//compute monthly payments
const x = Math.pow(1+calculateInterest,calculatPayment);
const monthly=(principal*x*calculateInterest)/(x-1);

if(isFinite(monthly)){
monthyPayment.value=monthly.toFixed(2);
totalPayment.value=(monthly*calculatPayment).toFixed(2);
totalInterest.value=((monthly*calculatPayment)-principal).toFixed(2)
//show results 
document.getElementById('results').style.display='block';

//hide loader 
document.getElementById('loading').style.display='none';


}else
showError('Please check your numbers');





}
//Show Error
function showError(error){

//Hide results 
document.getElementById('results').style.display='none';

//hide loader 
document.getElementById('loading').style.display='none';




  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  //clear error after 3 seconds 
  setTimeout(clearError, 3000);
}

//clear error
function clearError(){
    document.querySelector('.alert').remove();
}