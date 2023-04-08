// code your solution here

function superbowlWin(records){
    let foundRecord = records.find(function(obj){
        return obj.result === 'W'
    }) 
    if( foundRecord ){
        return foundRecord.year
    }else{
        return undefined
    }
    return foundRecord
}
// console.log(record.find(superbowlWin))

// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
  
//   function isCherries(fruit) {
//     return fruit.name === "cherries";
//   }
  
//   console.log(inventory.find(isCherries))