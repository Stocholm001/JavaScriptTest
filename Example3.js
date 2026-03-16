// // ข้อ 11
// // แสดงตัวเลข 1 ถึง 50
// // แต่ถ้าเป็นเลขที่หาร 3 ลงตัว ให้แสดงคำว่า "Fizz"
{
for (let i = 1; i <= 50; i++) {
    if (i %3 === 0) {
        console.log("Fizz");
    }else{
        console.log(i);
    }
    
}
}


// // ข้อ 12
// // แสดงตัวเลข 1 ถึง 50
// // ถ้าเลขหาร 5 ลงตัว ให้แสดง "Buzz"

{
for (let i = 1; i <= 50; i++) {
    if (i %5 === 0) {
        console.log("Buzz");
    }else{
        console.log(i);
    }
    
}
}


// ข้อ 13
// แสดงตัวเลข 1 ถึง 50
// ถ้าเลขหาร 3 ลงตัว = Fizz
// ถ้าเลขหาร 5 ลงตัว = Buzz
// ถ้าหารทั้ง 3 และ 5 ลงตัว = FizzBuzz
{
for (let i = 1; i <= 50; i++) {
    
    if(i %3 === 0 && i %5 === 0 ){
        console.log("FizzBuzz");
    }else if (i %3 === 0) {
        console.log("Fizz");
    }else if(i %5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
}

// ข้อ 14
// ให้ array = [5,8,12,3,20,7]
// หา "ค่าที่น้อยที่สุด" ใน array
{
let array = [5,8,12,3,20,7];
let Min = array[0]
for (let i = 0; i < array.length; i++) {
    if (array[i] < Min) {
        Min = array[i]
    }
    
}
console.log(Min);
}



// ข้อ 15
// ให้ array = [1,2,3,4,5]
// สร้าง array ใหม่ที่เก็บ "กำลังสอง" ของทุกค่า
// ตัวอย่างผลลัพธ์
// [1,4,9,16,25]
{
let array = [1,2,3,4,5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i] **2)
    
}

}

// ข้อ 16
// ให้ array = [10,25,30,45,50]
// แสดงเฉพาะค่าที่มากกว่า 30
// ตัวอย่างผลลัพธ์
// 45
// 50
{
let array = [10,25,30,45,50]
for (let i = 0; i < array.length; i++) {
    if (array[i] > 30) {
        console.log(array[i]);
    } 
 
}
}


// ข้อ 17
// ให้ array = [2,4,6,8]
// คูณค่าทุกตัวเข้าด้วยกัน
// ตัวอย่างผลลัพธ์
// Product = 384
{
let array = [2,4,6,8];
let sum = 1;
for (let i = 0; i < array.length; i++) {
    sum = sum * array[i]
    
}
console.log('Product:', sum);
}


// ข้อ 18
// ให้ array = [1,2,3,4,5,6]
// นับว่ามี "เลขคู่" ทั้งหมดกี่ตัว
// ตัวอย่างผลลัพธ์
// Even Count = 3
{
let array = [1,2,3,4,5,6]
let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] %2 ===0) {
        count = count+1
    }
}
console.log(count)
}


// ข้อ 19
// ให้ array = [5,3,8,1,2]
// เรียงค่าจากน้อยไปมาก
// ตัวอย่างผลลัพธ์
// [1,2,3,5,8]
{

let array = [5,3,8,1,2]

    
for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length -1; j++) {

        if (array[j] > array[j+1]) {
            Temp = array[j];
            array[j] = array[j+1];
            array[j+1] = Temp
        }
        
    }
    
}
console.log(array)

}






// ข้อ 20
// ให้ array = [1,2,3,4,5]
// หา "ค่าเฉลี่ย" ของตัวเลขทั้งหมด
// ตัวอย่างผลลัพธ์
// Average = 3
{


let array = [1,2,3,4,5]
sum = 0;

for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
    
}
let avg = sum / array.length;

console.log('Average:',avg);


}