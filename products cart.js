// ### **Products Cart Object**

// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`


let data = {


    detail : [],
  
   bag : function(){
     let obj1 = {name: "Rice", quantity: 2, price: 60};
       this.detail.push(obj1);
     let obj2 = {name: "Dal", quantity: 3, price: 50};
       this.detail.push(obj2);
     let obj3 = {name: "Salt", quantity: 1, price: 20};
      this.detail.push(obj3);
  
    return this.detail;
  },
  
    total : function(){
      let sum = 0;
      for(i=0; i<this.detail.length; i++){
        sum = sum + this.detail[i].quantity* this.detail[i].price;
      }
      return sum;
    }
    
  }
    let it = data.bag();
  console.log(it);
  
  let now = data.total();
  console.log(now);