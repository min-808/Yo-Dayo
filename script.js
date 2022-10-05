window.onload = images;
var initialValue = 1;
var pixivLink = "https://www.pixiv.net/en/artworks/";

// Making an array of all the images
imgArray = [
    "ayame1.png",
    "ayame2.png",
    "ayame3.png",
    "ayame4.png",
    "ayame5.png",
    "ayame6.png",
    "ayame7.png",
    "ayame8.png",
    "ayame9.png",
    "ayame10.png"
]

// Making an array of all the sounds
soundArray = [
    "yodayo1.mp3",
    "yodayo2.mp3",
    "yodayo3.mp3",
    "yodayo4.mp3",
    "yodayo5.mp3",
    "yodayo6.mp3",
    "yodayo7.mp3",
    "yodayo8.mp3",
    "yodayo9.mp3",
    "yodayo10.mp3",
    "yodayo11.mp3",
    "yodayo12.mp3"
]

// Chooses a random image from the array and updates it on refresh
function images() {
    var randomImageNumber = Math.floor(Math.random() * imgArray.length);
    selectedImages = imgArray[randomImageNumber];
    document.getElementById("update").src = 'images/' + selectedImages;
    console.log(randomImageNumber)

    // Updates the artist credit (ik this is messy asf)
    if (randomImageNumber == 0) {
        document.getElementById("updateArtist").innerHTML = "井Ido";
        document.getElementById("updateArtist").href = pixivLink + "79718750";
    } else if (randomImageNumber == 1) {
        document.getElementById("updateArtist").innerHTML = "STARFOX1015";
        document.getElementById("updateArtist").href = pixivLink + "88691631";
    } else if (randomImageNumber == 2) {
        document.getElementById("updateArtist").innerHTML = "鹤子_Channel";
        document.getElementById("updateArtist").href = pixivLink + "93141892";
    } else if (randomImageNumber == 3) {
        document.getElementById("updateArtist").innerHTML = "あかもく";
        document.getElementById("updateArtist").href = pixivLink + "86426720";
    } else if (randomImageNumber == 4) {
        document.getElementById("updateArtist").innerHTML = "のの🌵";
        document.getElementById("updateArtist").href = pixivLink + "85375037";
    } else if (randomImageNumber == 5) {
        document.getElementById("updateArtist").innerHTML = "なかしよん";
        document.getElementById("updateArtist").href = pixivLink + "88984030";
    } else if (randomImageNumber == 6) {
        document.getElementById("updateArtist").innerHTML = "torino";
        document.getElementById("updateArtist").href = pixivLink + "89345206";
    } else if (randomImageNumber == 7) {
        document.getElementById("updateArtist").innerHTML = "しいふーど";
        document.getElementById("updateArtist").href = pixivLink + "90544912";
    } else if (randomImageNumber == 8) {
        document.getElementById("updateArtist").innerHTML = "のの🌵";
        document.getElementById("updateArtist").href = pixivLink + "89913786";
    } else if (randomImageNumber == 9) {
        document.getElementById("updateArtist").innerHTML = "AW";
        document.getElementById("updateArtist").href = pixivLink + "86472938";
    } else {
        document.getElementById("updateArtist").innerHTML = "??";
    }
}

// Updates the local counter by incrementing by 1
// Then plays the random sound clip
function updateCounter() {
    var updateThis = document.getElementById("number");
    updateThis.innerHTML = initialValue++;

    let soundClip = new Audio(getRandomNoise("yodayo"));
    soundClip.volume = 0.5;
    soundClip.play();
}

// Locates a random sound clip and returns it as the file name
function getRandomNoise(title) {
    const x = "sounds/";
    var y = x + title + getRandomNum() + ".mp3";
    return y;
}

// Generates a random number based on the length of the sound array and returns it as a number
function getRandomNum() {
    var randomSoundNumber = Math.floor(Math.random() * soundArray.length) + 1;
    return randomSoundNumber;
}

// Selects a random cover (1-4)
function randomCover() {
    var randomCoverNumber = Math.floor(Math.random() * 4) + 1;
    document.getElementById("referBack").href = "https://www.bit.ly/yodayocover" + randomCoverNumber;
}
