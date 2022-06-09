/*function transfer () {
var enterName = document.getElementById('enterName').value
var amount = parseInt(document.getElementById('money').value)
var findaccountuser = enterName ;
var finalAmount = parseInt(document.getElementById(findaccountuser).innerText)+amount;
document.getElementById(finalAmount).innerHTML=finalAmount;
alert(`Successful transcation !!
$${amount}Sent to ${enterName}`)}*/
let transfer = document.getElementById('btn')
let SenderName = document.getElementById('SenderName')
let RecipientName = document.getElementById('RecipientName')
let amount = document.getElementById('money')


let datapro; 
if(localStorage.transfe !=null){
  datapro=JSON.parse(localStorage.transfe)
}else{
  datapro=[]
}

transfer.onclick=function(){
  let newpro = {
    SenderName:SenderName.value,
    RecipientName:RecipientName.value,
    amount:amount.value

  }
  datapro.push(newpro)
  localStorage.setItem('transfe', JSON.stringify(datapro))
  showdata()
}

  function showdata (){
    let table = '';
for(let i = 0 ; i<datapro.length ; i++){
  table+=`
  <tr>
  <td>${datapro[i].SenderName}</td>
  <td>${datapro[i].RecipientName}</td>
  <td>${datapro[i].amount}$</td>
</tr>
  `
}
    document.getElementById('tbody').innerHTML=table
  }
showdata ()
