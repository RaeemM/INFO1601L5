//object literal
let bob = {
    fname: "bob",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1603',
        grades: [ 89, 34, 67 ]
      },
      {
        course: 'INFO 1601',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  let sally = {
    fname: "sally",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1601',
        grades: [ 100, 89, 79 ]
      }
    ]
  };
  
  let paul = {
    fname: "paul",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1600',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  
  const students = [bob, sally, paul];

  function getAverateGrade(student, course){
    let sum = 0;
    for (let tran of student.transcript){
        if (tran.course === course){
            for (let grade of tran.grades){
                sum = sum + grade;
            }
        
            let avg = sum/tran.grades.length;
            return avg;
        }
    }

    return -1;
  }

  function getAssignmentMark(student, course, num){
    
    /*It wasn't specified what assigment number meant 
    so I assumed it's the order of the course in 
    the grades array.*/
    
    for (let tran of student.transcript){
        if (tran.course === course){
            return tran.grades[num - 1];
        }
    }

    return -1;
  }

  function averageAssessment(students, courseName, assignment){

    let sum = 0;
    let count = 0;

    for(let student of students){
        for(let tran of student.transcript){
            if (tran.course === courseName){
                sum = sum + tran.grades[assignment - 1];
                count = count + 1;
            }
        }
    }

    let avg = sum/count;

    return avg;
  }

  /*Tests*/

  console.log(getAverateGrade(paul, "INFO 1600"));
  console.log(getAverateGrade(paul, "INFA 1600"));

  console.log(getAssignmentMark(sally, "INFO 1601", 1));
  console.log(getAssignmentMark(sally, "INFO 1609", 1));

  console.log(averageAssessment(students, "INFO 1601", 1));