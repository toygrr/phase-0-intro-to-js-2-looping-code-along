const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
  let card = [];
  for (let c = 0; c < names.length; c++) {
    card.push(`Thank you, ${names[c]}, for the wonderful ${event} gift!`);
  }
  return card;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(a) {
  while (a > 0) {
    console.log(a);
    a--;
  }
  return console.log(a);
}
