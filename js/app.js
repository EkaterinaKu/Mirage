/* Social Instagram */

var i = document.getElementById("instagram");

function onMouseInstagramComm() {
    this.src = "image/Link/instagram_after.png";
}

function outMouseInstagramComm() {
    this.src = "image/Link/instagram.png";
}

i.onmouseover = onMouseInstagramComm;
i.onmouseout = outMouseInstagramComm;

/* Social Twitter */

var t = document.getElementById("twitter");

function onMouseTwitterComm() {
    this.src = "image/Link/twitter_after.png";
}

function outMouseTwitterComm() {
    this.src = "image/Link/twitter.png";
}

t.onmouseover = onMouseTwitterComm;
t.onmouseout = outMouseTwitterComm;

/* Social Youtube */

var y = document.getElementById("youtube");

function onMouseYoutubeComm() {
    this.src = "image/Link/youtube_after.png";
}

function outMouseYoutubeComm() {
    this.src = "image/Link/youtube.png";
}

y.onmouseover = onMouseYoutubeComm;
y.onmouseout = outMouseYoutubeComm;

/* Social Facebook*/

var f = document.getElementById("facebook");

function onMouseFacebookComm() {
    this.src = "image/Link/facebook_after.png";
}

function outMouseFacebookComm() {
    this.src = "image/Link/facebook.png";
}

f.onmouseover = onMouseFacebookComm;
f.onmouseout = outMouseFacebookComm;
