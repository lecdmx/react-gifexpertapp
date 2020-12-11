export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&offset=0&rating=g&lang=en&api_key=EOqpc2V87GweBoDAe9TvoJgrdkPjSG7V`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  // console.log(data);

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  // console.log(gifs);
  //   setImages(gifs);

  return gifs;
};
