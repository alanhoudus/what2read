export function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function randomReviewsCarrousel(reviewsList) {
  const reviewsForCarrousel = [];
  shuffle(reviewsList);
  for (let index = 0; index < 3; index += 1) {
    reviewsForCarrousel.push(reviewsList[index]);
  }
  return reviewsForCarrousel;
}
