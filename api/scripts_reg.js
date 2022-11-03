function register(){
    let log = $('#login').val()
    let pas = $('#password').val()
    let email = $('#email').val()
    $.post('reg.php', {login:log, password:pas, email:email}, function(data){
     let otvet = JSON.parse(data)
     
     if('error' in otvet){
      alert(otvet['error']['text'])
     }
     else if('response' in otvet){
      console.log(otvet)
      alert(otvet['response']['text'])
      document.location='/api/auth.html'
     }
     else{
      alert('invalid')
      console.log(data)
     }
    });
   }