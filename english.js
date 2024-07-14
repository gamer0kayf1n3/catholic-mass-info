const today = new Date();
const dateTwoDigit = today.getDate().toString().padStart(2, '0');
const monthTwoDigit = (today.getMonth() + 1).toString().padStart(2, '0');
const year = today.getFullYear() % 100;

BASE_URL = `https://bible.usccb.org/bible/readings/${monthTwoDigit}${dateTwoDigit}${year}.cfm`
