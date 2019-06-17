var usuario = {
  nombre: document.getElementById('nombre').value,
  email:document.getElementById('email').value,
  password:document.getElementById('password').value,
  enviar:document.getElementById('submit'),
  
  init:function(){
   
    this.alertarDatos()
    
  },
  
     
    

  alertarDatos: function(){
    this.enviar.addEventListener('click',function(){
      alert('Hola ' + usuario.nombre + ' te hemos enviado un correo a ' + usuario.email);
    })
  }
  
  
  
  }
usuario.init();