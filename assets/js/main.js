let students = [];

function shuffle(array){
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

$("#add").on("click", (e) => {
  e.preventDefault();
  let firstName = $("#first-name").val();
  let lastName = $("#last-name").val(); 
  $("#student-list").append('<li>'+firstName+' '+lastName+'</li>');
  let newStudent = {
    name: firstName,
    familyName: lastName
  };
  students.push(newStudent);

  if (students.length > 0) $("#randomize").show();
});

$("#randomize").on("click", (e) => {
  e.preventDefault();
  shuffle(students);
  $("#student-list li").remove();
  students.forEach((item) => {
    $("#student-list").append("<li>"+ item.name + " " +item.familyName+"</li>");
  });
});

