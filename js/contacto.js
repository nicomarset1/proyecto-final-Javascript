let section = document.getElementById("contactform");


contactform.innerHTML = `        <form action="">
<p>
    <label id="nombre">Nombre</label>
    <input type="text" name="nombre">
</p>
<p>
    <label>Apellido/s</label>
    <input type="text" name="apellido">
</p>
<p>
    <label>Número de teléfono</label>
    <input type="tel" name="celular">
</p>
<p>
    <label>Contraseña</label>
    <input type="password" name="affair">
</p>
<p class="block">
    <label>Mensaje</label> 
    <textarea name="message" rows="3"></textarea>
</p>
<p class="block">
    <button id="botonera">
        Enviar
    </button>
</p>
</form>`

const boton = document.getElementById(`botonera`);
		boton.addEventListener("click", (event) => {
            event.preventDefault()

            const nombre = document.querySelector(`input[name="nombre"]`).value;
            const apellido = document.querySelector(`input[name="apellido"]`).value;

			Swal.fire({
                icon: "success",
                title: "Registro exitoso!",
                text: "Hola ${nombre} ${apellido}, su mensaje será respondido en breve.",
            })
        
        }
        )

