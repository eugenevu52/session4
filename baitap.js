//  // Ex1
//  function test() {
//         let string="Hello World";
//         console.log(string);
// }
// test();
// test();
// test();

// // Ex2
// function sum(x,y){
//     let result=x+y;
//     console.log(result);
// }
// sum(2,3);

// // Ex3
// function draw_square(length,colors){
// 	color(colors);
//   for(let i=0; i<4; i++){
//   fd(length);
//   rt(90);
//   }
// }
// draw_square(200,"green");
// clear();

// // Ex4
// function draw_square(length, colors){
//       color(colors);
//      for(let i=0; i<4 ;i++){
//      fd(length)
//      rt(90)
//      }
//     }
//      for (let i = 0; i  < 30; i ++){
//       draw_square(i * 5, 'red')
//       lt(17)
//       penup()
//       fd(i * 2)
//       pendown()
//     }
//     clear();
// // Ex5
// function drawStar(length){
//         rt(18)
//         for(let i=0; i<5; i++){
//           fd(length);
//           rt(144);
//         }
//         }
//         drawStar(200);
//         clear();
// Ex6
// function remove_dollar_sign(s){
//       let excution = s.replace(/[$]/g, ''); 
//       console.log(excution);
//     }
//     remove_dollar_sign("Thang$ Vu$$");

// // Ex7
// function remove_dollar_sign(s){
//     let excution = s.replace(/[$]/g, ''); 
//     return excution;
//   }
// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up");
// if (string_with_no_dollars == "80% percent of life is to show up"){
//     console.log("Your function is correct");}
// else{
//     console.log("Oops, there's a bug")};

// // Ex8
// function get_even_list(l){
//     let newList=[];
//       for(let i=0; i<l.length; i++){
//        if(l[i]%2==0){
//           newList.push(l[i]);
//        }
//       }
//       return newList;
//     }
//     console.log(get_even_list([1, 4, 5, -1, 10]));

// // Ex9
// function get_even_list(l){
//     let newList=[];
//       for(let i=0; i<l.length; i++){
//         if(l[i]%2==0){
//              newList.push(l[i]);
//           }
//          }
//          return newList;
//        }

//       even_list = get_even_list([1, 2, 5, 9, -10, 6]);
      
//       if (even_list = [2, -10, 6]){
//           console.log("Your function is correct");
//         }
//       else {
//            console.log("Ooops, bugs detected");
//          };

// // Ex10
//     function is_inside([x, y], [x1, y1, width, height]){
//       let A=[x, y];
//       if(x>=x1 && x<= x1+width ){
//         if(y>y1 && y<= y1+height){
//           console.log("true");
//         }
//         else{
//           console.log("false");
//         }
//       }
//       else{
//         console.log("false");
//       }
//     }
//     is_inside([200,120], [140, 60, 100, 200]);

// // Ex11
// function is_inside([x, y], [x1, y1, width, height]){
//       let temp = 0
//       if(x>=x1 && x<= x1+width ){
//         if(y>y1 && y<= y1+height){
//           temp = true; 
//         }
//         else{
//           temp = false;
//         }
//       }
//       else{
//           temp = false;
//       }
//       return temp;
//     }
//  let test= is_inside([200, 120], [140, 60, 100, 200]);
//          if (test == false){
//              console.log("Your function is correct");
//            }
//          else {
//               console.log("Ooops, bugs detected");
//             };