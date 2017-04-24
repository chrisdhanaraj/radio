**THINGS TO DO**

- Create a Professor
- Create a Class
- Create a student UI with class
- Add notes
- Add highlights
- Create admin dashboard
- Figure out who's submitted what

**FOR MVP**

Professor
- First Name
- Last Name
- Password

Admin Dashboard
--> Request all class es owned by professor (/classes/professor/id)
--> Filter view by current class
  --> Get all students in class
    --> client-side (tease out data);

Student
 - Class
 - First Name
 - Last Name
 - Email
 - Password
 - Highlights
  {
    text: ''
    location: '',
  }
 - Notes
 {
   text: '',
   location: '',
 }
 - decisionOne
 {
   status: 'complete',
   decision: {
     option: 0,
     answer: String,
   }
 }
 - decisionTwo
 {
   status: 'inprogress',
   decision: {
     options: [0, 1, 2],
     answer: String,
   }
 }