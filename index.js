const data = [
  { date: "06/10/2020", start: "10:00 am", end: "11:00 am" },
  { date: "06/10/2020", start: "11:00 am", end: "12:00 am" },
  { date: "06/10/2020", start: "12:00 am", end: "01:00 pm" },
  { date: "07/10/2020", start: "10:00 am", end: "11:00 am" },
  { date: "07/10/2020", start: "11:00 am", end: "12:00 am" },
  { date: "07/10/2020", start: "12:00 am", end: "01:00 pm" },
];

// find your date values
const dateArray = data.map((item) => item.date);

console.log(dateArray);

//find different dates according to days
const sortbydate = dateArray.map((item) => item.split("/")[0]);

console.log(sortbydate);

// Find a unique value to determine how many arrays should be created

const uniqueDates = [...new Set(sortbydate)];

console.log(uniqueDates);

const arr1 = [];
const arr2 = [];

function FindDateObje() {
  for (let i = 0; i < sortbydate.length; i++) {
    if (sortbydate[i] == uniqueDates[0]) {
      arr1.push(data[i]);
    } else {
      arr2.push(data[i]);
    }
  }
  return [arr1, arr2];
}
console.log(FindDateObje());
