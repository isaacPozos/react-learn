export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&api_key=DZLpRymwBC3p2LSIua60pgWd12nkv2bg&q=${category}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    
    return gifs;
}