//minh dang DOM => truy xuat toi the co ID la luongve;
//innerHTML laf thuoc tinh noi dung cua the => gan gi tri bang dau =
document.getElementById('luongve').innerHTML = '20000';
document.getElementById('h2').innerHTML = 'DN10';
// thuong id la mot giá tri ko doi hoac thay thế nên khai báo  gia tri la hang so
const idtheh1 = 'luongve';
const idtheh2 = 'h2'

document.getElementById(idtheh1).innerHTML = '60000';
document.getElementById(idtheh2).innerHTML = 'bootcamp';

// document.getElementById(idImg).src = DOM tới thẻ img có id là image để thay thế cho thẻ bên html
// scr thay thế cho một đường link hình mới
const idImg = 'image';
document.getElementById(idImg).src = 'https://picsum.photos/id/237/200/300';
//trước khi thay đổi thuộc tính alt
console.log(document.getElementById(idImg).alt)

// sau khi thay đổi thuộc tính alt
document.getElementById(idImg).alt='đây là hình ảnh sau thay đổi'
console.log(document.getElementById(idImg).alt)

// thay thế hình mới
const nodeTheImg = document.getElementById(idImg);
nodeTheImg.scr = 'https://picsum.photos/id/10/300/800';
nodeTheImg.alt = 'đay là hình ảnh của dev'
console.log("🚀 ~ file: buoi2.js:27 ~ nodeTheImg:", nodeTheImg)

// thử DOM tới thẻ input và thay thế thuộc tính placeholder thành loging username.

const nudeinput = document.getElementById('inputID')
// dom -> node : object
nudeinput.placeholder= 'login usedname';
console.log(nudeinput.value)

// khai báo hàm bằng từ khóa function;
function login () {
    console.log('hàm khởi chạy',nudeinput.value);

}
// để đoạn code trong hàm chạy thì=> gọi hàm=> những đoạn code bên trong hàm được thực thi 
// login()
// login()
// login()
// login()
//login()

// viết 1 hàm tính tổng lương
var luong = 20000;
var hesoluong = 10;
var tongluong = 0; 
function tinhluong () {
    tongluong = hesoluong * luong;

}
console.log(tongluong) //0
tinhluong()
console.log('lương sau khi tính toán=', tongluong)

function laygiatriInput (){
    console.log(document.getElementById('inputID').value)
}
// làm sao để khi người dùng nhấn button login thì console log ra value người dùng nhập vào ngay thời diểm 
// c1: truyền id cho button; dom tới thẻ botton và gán hàm cho thuộc tính onclick
document.getElementById('button').onclick= laygiatriInput 

//c2: ngay trên html các bạn gọi thuộc tính onclick và truyền các function mà các bạn mong muốn khi click thì nó chạy  

/// Demo bài tập bật tắt đèn
/* 
tạo hàm để bật đèn => dom tới img và thay thế src của img đó
gắn cái hàm vừa tạo vào onclick của botton bật đèn
- ngược với tắt
*/
// cần hàm để đổi hình img  sang hình bật đèn
function turnon (){
    document.getElementById('imgden').src='./img/pic_bulbon.webp'
}
function turnoff (){
    document.getElementById('imgden').src='./img/pic_bulboff.gif'
}
document.getElementById('batden').onclick = turnon
document.getElementById('tatden').onclick = turnoff



