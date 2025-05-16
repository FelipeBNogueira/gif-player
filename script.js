async function searchGIFs() {
  const query = document.getElementById("searchInput").value;
  const apiKey = "dc6zaTOxFJmzC"; // Chave pública da Giphy
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${apiKey}&limit=12`;

  const res = await fetch(url);
  const json = await res.json();

  const gallery = document.getElementById("gifGallery");
  gallery.innerHTML = "";

  json.data.forEach(gif => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url;
    img.alt = gif.title;

    const card = document.createElement("div");
    card.className = "gif-card";
    card.appendChild(img);

    gallery.appendChild(card);
  });
}
