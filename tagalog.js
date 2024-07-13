const BASE_URL = "https://www.awitatpapuri.com";
const today = new Date();
const araw = [
  'linggo', 'lunes', 'martes', 'miyerkules', 
  'huwebes', 'biyernes', 'sabado'
];
const buwan = [
  'enero', 'pebrero', 'marso', 'abril', 
  'mayo', 'hunyo', 'hulyo', 'agosto', 
  'setyembre', 'oktubre', 'nobyembre', 'disyembre'
];
const day = araw[today.getDay()];
const month = buwan[today.getMonth()];
const dateTwoDigit = today.getDate().toString().padStart(2, '0');
const monthTwoDigit = (today.getMonth() + 1).toString().padStart(2, '0');
const year = today.getFullYear();

const formattedDate = `${day}-${month}-${dateTwoDigit}-${year}`;
location.href = `${BASE_URL}/${year}/${monthTwoDigit}/${dateTwoDigit}/${formattedDate}/`;
