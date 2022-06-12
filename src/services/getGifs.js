export default function getGifs(urlAPI) {
  return fetch(urlAPI)
    .then((res) => res.json())
    .then((response) => {
      const newGifs = response.data.map((gif) => ({
        url: gif.images.downsized.url,
        title: gif.title,
        id: gif.id,
      }));
      return newGifs;
    });
}
