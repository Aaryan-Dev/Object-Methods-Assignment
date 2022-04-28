// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let rectangle = {

    length : 4,
    Breadth : 6,
    area : function(){
            return this.length* this.Breadth
    },
    perimeter :   function(){
          return (2*this.length + 2*this.Breadth)
    }
  }
  
  let A = rectangle.area()
  let P = rectangle.perimeter()
  
  console.log(A, P);
  