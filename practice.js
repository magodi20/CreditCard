const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]



let validCredit = (array) => {
    let array1 = array.slice(0,15)
    let array2 = array1.reverse()
    let array3 = array2.filter(element => {
       if(element.index % 2 === 1) {
          
         return element * 2
       } else {
           return 'error'
       }
        
        
    
    })
     return array3;
 };

 console.log(validCredit(mystery5))