let arr=[23,34,65,345]

//destructuring
let [a,b,c,d]=arr
console.log(a);
console.log(b);

// let a=arr[0]
// let b=arr[1]
// let c=arr[2]
// let d=arr[3]


let obj={
    id:1,
    name:"kural",
    sal:100000,
    role:"developers"
}
let {sal,id,name}=obj
console.log(name,id);



let add=()=>{
    console.log("hello ");
}