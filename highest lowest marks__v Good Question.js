// Problem
// Create an object with the following functionality

// Ability to add student details and 3 subject marks
// Methods to find the student with the least and highest total

let obj = {

    data : [],
  // ****************** addStudents **********************
      addStudents : function(){
        let st1 = {name : "Aryan", Phy : 80, chem : 80, maths : 80 }
        this.data.push(st1);
        let st3 = {name : "Dave", Phy : 8, chem : 6, maths : 7 }
        this.data.push(st2);
        let st2 = {name : "dev", Phy : 1, chem : 1, maths : 1 }
        this.data.push(st3);
  
        return this.data
      },
  // *********************** least_Marks ****************
      least_Marks : function(){
  
        let marks = []
  
       for(i=0; i<this.data.length; i++){
         sum = this.data[i].Phy + this.data[i].chem + this.data[i].maths;
         marks.push(sum);
       }
  
  
        let min = Infinity
        for(j=0; j<marks.length; j++){
          if(marks[j]<min){
            min = marks[j]
          }
        }
       console.log(this.data[marks.indexOf(min)].name, min);  
  
    }, 
  // **************** max_Marks ***************
    max_Marks : function(){
  
     let marks = []
  
        let max = -Infinity;
       for(i=0; i<this.data.length; i++){
         sum = this.data[i].Phy + this.data[i].chem + this.data[i].maths;
         marks.push(sum);
       }
  
  
        for(j=0; j<marks.length; j++){
          if(marks[j]>max){
            max = marks[j]
          }
        }
       console.log(this.data[marks.indexOf(max)].name, max);  
    }, 
  
  
    // __________________ Output _____________________________-
    }
  
  let details = obj.addStudents();
  console.log(details);
  
  obj.least_Marks();
  
  obj.max_Marks();
      
  
      
        