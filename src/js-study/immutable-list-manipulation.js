let lst = [ { id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Paul" } ]
let newLst = lst.concat({id: 4, name: "Ken"});

// console.log(lst)
// console.log(newLst)
// console.log(lst === newLst)


// // 요소 변경
// let updatedId = 2
// let updatedName = "Smith"
// let updatedLst = lst.map(item => {
//     if(item.id === updatedId) {
//         item = { ...item, name: updatedName }
//     }
//     return item
// })

// let removedId = 1
// let removedLst = lst.filter(item => {
//     return item.id !== removedId
// })

let newLst2 = []
for(const item of lst){
    newLst2.push(item)
}
// console.log(newLst2)
// newLst2.splice(1, 1)
// //저는 모르겟습니다
// console.log(lst)
// console.log(newLst2)
// console.log(lst === newLst2)


let newObj = {}
newObj.id = lst[1].id
newObj.name = lst[1].name
newLst2[1] = newObj
console.log(lst)
console.log(newLst2)
console.log(lst === newLst2)
console.log(lst[1])
console.log(newLst2[1])
console.log(lst[1] === newLst2[1])
