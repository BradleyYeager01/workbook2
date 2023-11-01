// let myFamily = ["Dave", "Brad", "Jean", "Smokey"]

// for (let i = 0; i < myFamily.length; i++) {
//     console.log(myFamily[i]);
// }

// let myScores = [92,98,84,89,99,100]
// let yourScores = [82,98,94,88, 92, 100,100]
// let total = 0;

// for (let i = 0; i < myScores.length; i++) {
//     const score = myScores[i];
//     total += score;
// }

// function getAverage() {

// }

// let average = total / score.length;
// console.log(average);

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

for (const course of courses) {
  if (course.CourseId == "PROG200") {
    console.log(course.StartDate);
  }
}

for (const course of courses) {
    if (course.CourseId == "PROJ500") {
        console.log(course.Title);
    }
}

for (const course of courses) {
    if (course.Fee == "50.00") {
        console.log(course.Title);
    }
}

for (const course of courses) {
    if (course.Location == "Classroom 1") {
        console.log(course.Title);
    }
}