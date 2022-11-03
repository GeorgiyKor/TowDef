function login(){
    let log = $('#login').val()
    let pas = $('#password').val()
    
    $.get('auth.php', {login:log, password:pas}, function(data){
     let otvet = JSON.parse(data)
     
     if ('error' in otvet) {
      alert(otvet['error']['text'])
     }
     
     else if ('response' in otvet) {
      if (otvet['response'].length == 1) {
       alert('Вы успешно авторизованы!')
       document.location='/TD/td.html'
      }
      else {
       alert('Такого пользователя нет!')
       document.location='/api/reg.html'
      }
     }
     else {
      alert('Непредвидимая ошибка')
      console.log(data)
     }
    });
   }