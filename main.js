


const button = document.getElementById('submit-btn').addEventListener('click', ()=>{
   
        let email = document.getElementById('input');
        
            
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(re.test(email.value) === true){
            console.log('success');


        }else{

           document.getElementById('input').placeholder = 'Please enter your email !' ;
           email.classList.add('place-class');
           document.getElementById('hidden').style.display = 'initial'
        }
          
        
      
});

