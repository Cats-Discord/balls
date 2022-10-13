export function randomBackground() {
    const backgrounds = ['url("https://64.media.tumblr.com/e10fca02c4b32ddbae8f557a435ca2e0/tumblr_oqje2sr9bu1vtnv5po1_500.gif")',
                         'url("https://media.tenor.com/tsA9TRzPrjIAAAAC/felix-the-cat-cheers.gif")',
                         'url("https://66.media.tumblr.com/a820dcfc128863b53d5041d985140d26/aabe55b6f2844f0e-7f/s540x810/457013407aa6e2fe3dbe7df2d73297e3f753cd69.gif")'];
    return backgrounds[Math.floor(Math.random() * backgrounds.length)]
}