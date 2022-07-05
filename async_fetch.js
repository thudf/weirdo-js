fetch('video.json')
.then(response => response.json())
.then(data => console.log(data))

setTimeout(() => {
  console.log('setTimeout')
}, 0)

console.log('test')

function teste() {
  Array(50).fill('').forEach((_, index) => console.log(index))
}

teste()

