fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
        return response.json();
  })
  .then((data) => {
    
    const $contenedor = document.getElementById("grid-item");
    const personajes = data.results;
  
    for (let i=0; i < personajes.length; i++) {
      console.log(personajes[i]);
      $contenedor.innerHTML += `
      <div class="tarjeta">
        <img class="imagecita" src="${personajes[i].image}">
        <p class="nombre-personaje">${personajes[i].name}</p>
        <p>Gender:${personajes[i].gender}</p>
        <p>Species:${personajes[i].species}</p>
        <p>Status:${personajes[i].status}</p>           
      </div>
      `;
    }
  });