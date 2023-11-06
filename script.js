const btn = document.getElementById("btn");
console.log(btn);

const output = document.getElementById("output");
console.log(output);

const input = document.getElementById("input");
console.log(input);

btn.onclick = async () => {

  try {
    const response = await fetch("https://api.github.com/users/" + input.value);
    const data = await response.json();

    if (data !== false) {

      console.log(data);

      output.textContent = "";

      const name = document.createElement("h2");
      name.textContent = `Compte de ${data.name}`;
      output.appendChild(name);

      const img = document.createElement("img");
      img.src = data.avatar_url;
      img.style.width = "150px";
      output.appendChild(img);

      const location = document.createElement("p");
      location.textContent = `Localisation : ${data.location}`;
      output.appendChild(location);

      const bio = document.createElement("p");
      bio.textContent = `Biographie : ${data.bio}`;
      output.appendChild(bio);

      const company = document.createElement("p");
      company.textContent = `company : ${data.company}`;
      output.appendChild(company);

      output.style.display = 'block';


    } else {
      const erreur = document.createElement("p");
      erreur.textContent = `Le compte n'exitste pas`;
      output.appendChild(erreur);
    }

  } catch (error) {
    console.log("Une erreur s'est produite :", error);

  }
};

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    output.textContent = "";

    const name = document.createElement("h2");
    name.textContent = `Compte de ${data.name}`;
    output.appendChild(name);

    const img = document.createElement("img");
    img.src = data.avatar_url;
    img.style.width = "150px";
    output.appendChild(img);

    const location = document.createElement("p");
    location.textContent = `Localisation : ${data.location}`;
    output.appendChild(location);

    const bio = document.createElement("p");
    bio.textContent = `Biographie : ${data.bio}`;
    output.appendChild(bio);

    const company = document.createElement("p");
    company.textContent = `company : ${data.company}`;
    output.appendChild(company);

    output.style.display = 'block';
  }
});

// Gestionnaire d'événements pour le bouton
btn.onclick = processInput;