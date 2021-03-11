
//variables

    const btnEnviar = document.querySelector('#enviar');

    const btnReset = document.querySelector('#resetBtn');

    const email = document.querySelector('#email');

    const asunto = document.querySelector('#asunto');

    const mensaje = document.querySelector('#mensaje');

    const formulario = document.querySelector('#enviar-mail');


    //expresion regular
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//eventos

eventListeners();
function eventListeners(){
    //iniciando la app
    document.addEventListener('DOMContentLoaded', iniciarApp );

    //validar campos
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);

    //enviar formulario 
    formulario.addEventListener('submit',enviarEmail);

    //resetear
    btnReset.addEventListener('click',resetearFormulario);
}


//funciones

function iniciarApp(){
    
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

}

function validarFormulario(e){

    if(e.target.value.length > 0){

        //eliminar advertencia del dom

        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('border-red-500');
        e.target.classList.add('border-green-500');
    }else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Hay campos sin llenar!!');
    }

    //validar que tenga el email
    if(e.target.type === 'email'){

        if(er.test(e.target.value)){        //como usar er
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }

            e.target.classList.remove('border-red-500');
            e.target.classList.add('border-green-500');
        }else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no valido'  );
        }

    }
    //validacion pasada
    if( er.test( email.value) && asunto.value !== '', mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }  

}

function mostrarError(mensaje){

    const mensajeError = document.createElement('P');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500','background-red-100','text-red-500','p-3','mt-5','mb-5','text-center','error');
    
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0  ){
        formulario.insertBefore(mensajeError,document.querySelector('#spinner'));
    }else{
        formulario.re
    }

}


//enviar email 

function enviarEmail(e){

    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    
    //despues de 3 segundos
    setTimeout(() => {

        spinner.style.display = 'none';
        const parrafo = document.createElement('P');
        parrafo.textContent = 'Se ha enviado exitosamente el mail'
        parrafo.classList.add('text-center','my-10','p-5','bg-green-500','text-white','font-bold','uppercase');
        formulario.insertBefore(parrafo,spinner);

        setTimeout(() => {
            parrafo.remove();
            resetearFormulario();
        }, 3000);

    }, 3000);

}


//resetear formulario

function resetearFormulario(){
    formulario.reset();
    email.classList.remove('border-green-500');   
    asunto.classList.remove('border-green-500');   
    mensaje.classList.remove('border-green-500');   
    iniciarApp();
}