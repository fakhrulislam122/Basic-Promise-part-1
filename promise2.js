// callback function

const persons = [
  { firstman: "maria", lastname: "akter", age: 14 },
  { firstman: "Md Fakhrul islam", lastname: "Nayan", age: 22 },
];

function createPerson(person) {
  const p = new Promise((resolve, reject) => {
    persons.push(person);
    resolve();
  });

  return p;
}

function getPerson() {
  setTimeout(() => {
    let output = "<ol>";
    persons.forEach((item) => {
      output += `<li> FirstName: ${item.firstman} ; LastName: ${item.lastname} ;   Age:${item.age} </li>`;
    });
    output += "<ol/>";
    document.getElementById("output").innerHTML = output;
  }, 2000);
}

createPerson({ firstman: "tania", lastname: "nasrin", age: 26 }).then(
  getPerson
);
