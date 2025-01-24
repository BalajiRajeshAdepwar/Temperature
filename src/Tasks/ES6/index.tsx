//1

type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') };
};

// Type guard to identify if person is Student or User
// if ('study' in person) {
//   console.log('This person is a Student');
// } else {
//   console.log('This person is a User');
// }

// console.log(person);

// challenge - 24-01-2025  - how to identify if person is Student or User

function isStudent(person: Person): person is Student {
  return "study" in person;
}

const person = randomPerson();

if (isStudent(person)) {
  console.log("Person is a Student");
  person.study();
} else {
  console.log("Person is a User");
  person.login();
}


//2 

// async function someFunc(): Promise<string> {
//     return 'Hello World';
//   }
//   const result = someFunc();
//   console.log(result);
  
 // challenge - 24-01-2025 - at present output is Promise which is in fullfilled status
  // can u make minimum changes in above code to show Prmise status as pending. 

  async function some(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello world");
      }, 5000); 
    });
  }
  
  const res = some();
  console.log(res); 
  
  
  res.then((value) => console.log(value)); 
  
 