export async function getAllBussinessBooks(category, startIndex = 0) {
  if (category === "Food & Drink") {
    category = "Cooking";
  }
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=AIzaSyD4oS7N8gisi8GyEbXraqiJqftQ2xrBfh8&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`
    );

    const books = await response.json();
    return books;
  } catch (e) {
    console.log(e.message);
  }
}

export function getRandomRating() {
  return Math.random() * (5 - 1) + 1;
}
export function getRandomRatingCount() {
  return Math.random() * (100 - 1) + 1;
}
export function getRandomPrice() {
  return Math.random() * (10 - 2) + 2;
}
