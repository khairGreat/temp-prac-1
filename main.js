


let array = [ 
    1,2,3,4,5 
]


let s = array.reduce ((accumulator,cur_data)=> {
    return accumulator + cur_data 

})


for ( let num of array ) { 
    console.log(num);
    
}