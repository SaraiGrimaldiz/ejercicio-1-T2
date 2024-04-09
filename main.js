function sendForm(event) {
  event.preventDefault();
  console.log(event);
  const name = event.target.name.value;
  // recupere los datos faltantes
  

  const app = document.getElementById("app");
  if (password !== password2) {
    const error = document.createElement("p");
    error.textContent = "Las contraseñas no coinciden";
    app.appendChild(error);
    return;
  }

  const user = [
    {
      label: "Nombre",
      value: name,
    },
    {
      label: "Apellido",
      value: apellido,
    },
    {
      label: "Email",
      value: email,
    },
    {
      label: "Contraseña",
      value: contraseña,
    },
    {
      label: "Repetir contraseña",
      value: r_contraseña,
    },
    // complete el objeto
  ];

  const title = document.createElement("h1");
  title.innerHTML = `<h1 class="text-2xl title">
    Datos del usuario
  </h1>`;
  app.appendChild(title);
  app.style.height = "auto";

  user.forEach((item) => {
    const container = document.createElement(""); // dentro de las comillas complete la etiqueta a crear
    container.innerHTML = `
            <div
                class="container__item"  
            > 
                <span
                    class="item__label"
                >${item.label}</span>
                <span
                    class="item__value"
                >${item.value}</span>
            </div>`;
    app.appendChild(container);
  });
}