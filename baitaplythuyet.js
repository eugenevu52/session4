// - Chúng ta nên sử dụng function vì nó giúp cho chương trình hay dự án của t có hệ thống, logic qua từng cái tên hàm riêng biệt với các 
// chức năng khác nhau. Đồng thời nó còn giúp ta tìm bugs với fix một cách dễ dàng hơn mà không phải tốn nhiều thời gian, công sức tìm or 
// OT,...
// - function declaration: 
//     function nameOfFunction(params) {
//         execution and deployment
//     }
// - When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller"
// - Không bắt buộc phải sử dụng return vì không phải tất cả các function đều có giá trị trả về

// - Parameters are variables listed as a part of the function definition.
// - Arguments are values passed to the function when it is invoked.
// For example: function tinhTong(x,y){//x,y are parameters
//         return x+y;
// }
// let  result=tinhTong(2,3);//2,3 are arguments
// How to use function from a different file other than our currently working file?
// - Sử dụng : window.onload = () =>{
//     // hàm này sẽ gọi đến tất cả các file js được tải.
//    }


