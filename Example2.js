// // ข้อ 1
// // แสดงตัวเลข 1 ถึง 10


// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }



// // ข้อ 2
// // แสดงตัวเลข 1 ถึง 20 แต่แสดงเฉพาะเลขคู่

// for(let i=1; i<=20; i++){
//     if(i %2 === 0){
//     console.log(i)
//     }
// }


// ข้อ 3
// แสดงตัวเลข 1 ถึง 10 และแสดงผลรวมทั้งหมด
// ตัวอย่างผลลัพธ์
// Sum = 55


// let sum = 0;
// for(let i = 1; i <= 10; i++){
//     sum = sum + i;
//     console.log(i);
// }
// console.log('Sum(i):', sum);


// ข้อ 4
// แสดงตารางสูตรคูณแม่ 5
// ตัวอย่าง
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 12 = 60

// let a = 5;
// for(let i = 1; i <= 10; i++){
//     console.log('5 X',i,'=' ,a * i);
// }



//ข้อ 5
// ให้ array = [1,2,3,4,5]
// ใช้ for loop แสดงค่าทุกตัวใน array


// let i = [1,2,3,4,5];
// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }




// ข้อ 6
// ให้ array = [10,20,30,40,50]
// แสดงค่าทุกตัว และหาผลรวมของ array


// let arr = [10,20,30,40,50];
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     sum += arr[i];
 
// }
// console.log('SUM:', sum);


// ข้อ 7
// ให้ array = [1,2,3,4,5,6,7,8]
// แสดงเฉพาะเลขคู่ใน array

// arr = [1,2,3,4,5,6,7,8];
// for (let i = 0; i <arr.length; i++) {
//     if (arr[i] %2 ===0) {
//         console.log(arr[i])
//     }
    
// }




// ข้อ 8
// ให้ array = [5,10,15,20]
// คูณทุกค่าด้วย 2 แล้วแสดงผล
// ตัวอย่างผลลัพธ์
// 10
// 20
// 30
// 40

// arr = [5, 10, 15, 20];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] *2);
    
// }


// ข้อ 9
// ให้ array = [3,6,9,12,15]
// หาค่าที่มากที่สุดใน array


let arr = [3,6,9,12,15];
let Max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Max) {
        Max = arr[i];
    }
    
}
console.log(Max);



// ข้อ 10
// ให้ array = [1,2,3,4,5]
// แสดงค่าของ array แบบย้อนกลับ
// ผลลัพธ์
// 5
// 4
// 3
// 2
// 1


// let arr = [1,2,3,4,5];
// for (let i = arr.length - 1; i >= 0; i--) {
//     const element = arr[i];
//     console.log(element);
    
// }