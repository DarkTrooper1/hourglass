const gameIframe = () => {
  document.getElementById('images').style.display = "none"
  document.getElementById('gameIframe').src = "Drive Mad/"
  document.getElementById('gamePage').style.display = "block"
}

const displayBody = () => {
  const vid = document.getElementById('myVideo')
  vid.style.display = "none"
  const content = document.getElementById('content')
  content.style.display = "block"
}
