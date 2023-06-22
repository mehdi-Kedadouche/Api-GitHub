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
console.table(data);
if(data !== false){
output.textContent = "";   
const name = document.createElement("h2");
name.textContent = `Compte de ${data.name}`;
output.appendChild(name);

const location = document.createElement("p");
location.textContent = `Localisation : ${data.location}`;
output.appendChild(location);

const bio = document.createElement("p");
bio.textContent = `Biographie : ${data.bio}`;
output.appendChild(bio);
   
  
    const img = document.createElement("img");
    img.src = data.avatar_url;
    img.style.width = "130px";
    

    output.appendChild(img);

  }else {  
    const erreur = document.createElement("p");
    erreur.textContent = `Le compte n'exitste pas`;
    output.appendChild(erreur); 
  }

  } catch (error) {
    console.log("Une erreur s'est produite :", error);
   
  }
};
