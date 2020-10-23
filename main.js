/* Kamil Salawa october 2020 */

class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
   set numberOfStudents(num){
       if (typeof value === Number){
           this._numberOfStudents = num;
       }else {
           console.log('Invalid input: numberOfStudents must be set to a Number.')
       }
   }
   quickFacts(){
       console.log(`${name} educates ${this.numberOfStudents} studets at the ${this.level} school level.`)
   };
   static pickSubstituteTeacher(substituteTeacher){
        const randInt = Math.floor(substituteTeacher.length * Math.random());
        return substituteTeacher[randInt];
   }
}