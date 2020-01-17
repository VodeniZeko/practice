function userCard(obj) {
  //grab a div
  const mainDiv = document.createElement("div");
  // create elements
  const divImage = document.createElement("img");
  const name = document.createElement("h2");
  const username = document.createElement("p");
  const email = document.createElement("p");
  const catchPhrase = document.createElement("p");
  const geo = document.createElement("p");
  const lat = document.createElement("p");
  const lang = document.createElement("p");

  //add classes

  mainDiv.classList.add("card");
  lat.classList.add("left");
  lang.classList.add("right");

  //textContent

  divImage.setAttribute("src", `https://robohash.org/${obj.name}?size=100x100`);
  name.textContent = `name: ${obj.name}`;
  username.textContent = `username: ${obj.username}`;
  email.textContent = `email: ${obj.email}`;
  catchPhrase.textContent = `my thing is: ${obj.company.catchPhrase}`;
  geo.textContent = `geolocation: \u25BC`;
  lat.textContent = `latitude: ${obj.address.geo.lat}`;
  lang.textContent = `langitude: ${obj.address.geo.lng}`;

  //append stuff

  mainDiv.append(divImage);
  mainDiv.append(name);
  mainDiv.append(username);
  mainDiv.append(email);
  mainDiv.append(catchPhrase);
  mainDiv.append(geo);
  mainDiv.append(lat);
  mainDiv.append(lang);

  return mainDiv;
}

const container = document.querySelector(".here");

axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
  res.data.map(person => {
    container.append(userCard(person));
  });
});

axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
  console.log(res.data);
});
