let images = [
    "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
    "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
    "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
    "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
    "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
    "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png",
];

const imgs = document.getElementsByTagName("img")

for (image of imgs) {
    const index = Math.floor(Math.random() * images.length);
    image.src = images[index];
}