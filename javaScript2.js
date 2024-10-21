
 var form= document.getElementById('form')

form.addEventListener('submit',function(event){
event.preventDefault()

  var buy = document.getElementById('buy').value
 if (buy){
  window.location.href = 'ondeliver.html' 
 }

        
    
})