let section = document.getElementById("contactform");


contactform.innerHTML = `        <form action="">
<p>
    <label>Nombre</label>
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
		boton.addEventListener("click", () => {
			Swal.fire({
                icon: 'success',
                title: 'Registro exitoso!',
                text: 'Su mensaje sera respondido en breves.',
            })}
        )