
//variables

    const btnEnviar = document.querySelector('#enviar');

    const email = document.querySelector('#email');

    const asunto = document.querySelector('#asunto');

    const mensaje = document.querySelector('#mensaje');

    const formulario = document.querySelector('#enviar-mail');


//eventos

eventListeners();
function eventListeners(){
    //iniciando la app
    document.addEventListener('DOMContentLoaded', iniciarApp );

    //validar campos
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
}


//funciones

function iniciarApp(){
    
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

}

function validarFormulario(e){
    
    if(e.target.value.length > 0){
        e.target.classList.remove('border-red-500');
    }else{
        e.target.classList.add('border', 'border-red-500');
        mostrarError();
    }

}

function mostrarError(){



    const mensajeError = document.createElement('P');
    mensajeError.textContent = "Hay campos sin llenar!!";
    mensajeError.classList.add('border', 'border-red-500','background-red-100','text-red-500','p-3','mt-5','mb-5','text-center','error');
    
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0  ){
        formulario.insertBefore(mensajeError,document.querySelector('#spinner'));
    }else{
        formulario.re
    }

}
