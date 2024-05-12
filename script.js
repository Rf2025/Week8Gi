// EASY:
// A local gym wants to implement an "exercise of the day" program where there is a free class for that day that promotes a certain exercise. The gym needs some backend logic to update its system to reflect which exercise will be promoted that day. Write a function that will take as an input the name of an exercise and console log a message like Today's exercise: running
//  Write one function that can dynamically print the value of the exercise for that day, and it must be closure.

function exerciseOfDay(){
let todaysExercise = ''
  return  function (checkExercise){
           if(checkExercise){
             todaysExercise = checkExercise;
             console.log("todays exercise is", todaysExercise)
           }
        }
    }

let currentExercise = exerciseOfDay();;

currentExercise('running');
currentExercise('swimming');
currentExercise('weightlifting');




// Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal in case there is no way to split the pizza evenly.

function slicesPerPerson(){
    return function splitPizza(x,y){
         if(x,y){
            let result = x / y ;
            console.log(`we had ${x} slices of pizza for ${y} people, we each got ${result} slices of pizza`)
         }
       
    }
}

let cutPizza = slicesPerPerson();
cutPizza(10,2)

// nside a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly.

function viewPublicInfo(fullName, ssn) {
    const PII = {
        name: fullName,
        ssn: ssn
    };
    
    function displayPublicInfo() {
        return PII.name;
    }
    
    return {
        displayPublicInfo: displayPublicInfo
    }
}

const patient = viewPublicInfo('John Doe', '123-456-7899');
console.log(patient.displayPublicInfo())

class person{
    constructor(name,job,age){
       this.name = name;
       this.job = job;
       this.age = age;
    }
    exercises(exercise){
        console.log(`${this.name} likes to ${exercise}`)
       }
       fetchJob(){
              console.log(`${this.name} works as a ${this.job}, he is ${this.age} years old`)
       }
}

let newGuy = new person('rico','back-end developer',24)

newGuy.exercises('run')
newGuy.fetchJob()


class programmer extends person {
    constructor(languages,busy){
        super(languages,busy)
    this.languages = languages;
    this.busy = true;
    }
    completeTask(){
        this.busy = false;
    }
    acceptNewTask(){
        this.busy = true;
    }
    offerNewTask(){
        if(this.busy = true){
            console.log(`rico can't accept any new tasks right now.`)
        } else{
            console.log(`rico would love to take on a new responsibility`)
        }
    }
    learnLanguage(){
        console.log(`${this.name} would like to learn the following languages:['python','Rust','Deno','C#']`)
    }
    listLanguages(){
        console.log(`${this.name} barely knows javascript`)
    }
}

let newguy1 = new programmer('rico','back-end developer',24,'javascript')

console.log(newguy1.learnLanguage())
console.log(newguy1.listLanguages())
console.log(newguy1.offerNewTask())
