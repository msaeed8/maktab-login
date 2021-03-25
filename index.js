let student = {
  name: "Ali Komijani",
  stnumber: 92103245,
  marks: { fizik1: 15, riyazi1: 12 },
  units: ["fizik1", "riyazi1"],
};

function createStudent(name, stnumber, marks, units) {
  student.name = name;
  student.stnumber = stnumber;
  student.marks = marks;
  student.units = units;
}
