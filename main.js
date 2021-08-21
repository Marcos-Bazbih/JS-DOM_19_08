// **********************__1__************************
// function mission1 (){
//     document.write("hello there");
// }
// mission1();
// **********************__1__************************


// **********************__2__************************
// function mission2(){
//     document.write("hello there david");
// }
// mission2();
// **********************__2__************************


// **********************__3__************************
// function mission3 (userName){
//     document.write(`hello there ${userName}`);
// }
// mission3(prompt("enter your name"));
// **********************__3__************************


// **********************__4__************************
// function mission4 (fName, lName, age){
//     document.write(`first name: ${fName}, last name: ${lName}, age: ${age}`)
// }
// mission4(prompt("enter first name"),prompt("enter last name"),Number(prompt("enter your age")));
// **********************__4__************************


// **********************__5__************************
// function mission5 (userName, userAge){
//     document.getElementById("mission5Div").innerText = `name: ${userName}, age: ${userAge}.`;
// }
// mission5(prompt("enter first name"), Number(prompt("enter your age")))
// **********************__5__************************


// **********************__6__************************
// function mission6 (fName, Lname, age){
//     document.getElementById("mission6FNameDiv").innerText = fName;
//     document.getElementById("mission6LNameDiv").innerText = Lname;
//     document.getElementById("mission6AgeDiv").innerText = age;
// }
// mission6(prompt("enter first name"), prompt("enter last name"), Number(prompt("enter age")));
// **********************__6__************************


// **********************__7__************************
// function mission7(userName, userAge) {
//     document.write(`<div>name: ${userName}, age: ${userAge}</div>`);
// }
// mission7(prompt("enter your name"), Number(prompt("enter your age")));
// **********************__7__************************


// **********************__8__************************
// function mission8 (fName, lName, age){
//     document.write(`<div><p>first name: ${fName}, last name: ${lName}, age: ${age}</p></div>`);
// }
// mission8(prompt("enter first name"), prompt("enter last name"), Number(prompt("enter your age")));
// **********************__8__************************


// **********************__9__************************
// function mission9 (fName, LName, age){
//     document.write(`<p id="mission9P">first name: ${fName} last name: ${LName} age: ${age}</p>`);
// }
// mission9(prompt("enter first name"), prompt("enter last name"), Number(prompt("enter your age")));
// **********************__9__************************


// **********************__10__************************
// function mission10 (fName, LName, age){
//     document.write(`<div><p id="mission10P">first name:${fName} last name:${LName} age:${age}</p></div>`);
// }
// mission10(prompt("enter first name"), prompt("enter last name"), Number(prompt("enter your age")));
// **********************__10__************************


// **********************__11-A__************************
// function mission11A (fName){
//     document.write(`<p id="mission11P"> first name:${fName}</p>`);
// }
// mission11A(prompt("enter first name"));
// **********************__11-A__************************

// **********************__11-B__************************
// function mission11B (lName){
//     document.getElementById("mission11P").innerText += ` last name: ${lName}`;
// }
// mission11B (prompt("enter last name"));
// **********************__11-B__************************


// **********************__12-A__************************
// function mission12A(fName) {
//     document.write(`<p id="mission12P">first name:${fName}</p>`);
// }
// mission12A(prompt("enter first name"));
// **********************__12-A__************************
// **********************__12-B__************************
// function mission12B(lName) {
//     document.getElementById("mission12P").innerText += ` last name: ${lName} date: ${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
// }
// mission12B(prompt("enter last name"));
// **********************__12-B__************************


// **********************__13__************************
// function mission13A(carColor, carBrand, carSmk) {
//     var carObj = {
//         carColor: carColor,
//         carBrand: carBrand,
//         carSmk: carSmk
//     };
//     document.write(`car color: ${carObj.carColor}  car brand: ${carObj.carBrand}  car smk: ${carObj.carSmk}`);
// }
// mission13A(prompt("enter car color"),prompt("enter car brand"),prompt("enter car smk"));
// **********************__13__************************


// **********************__14__************************
// function mission14(carColor, carBrand, carSmk) {
//     var carObj = {
//         carColor: carColor,
//         carBrand: carBrand,
//         carSmk: carSmk,
//         carYear: new Date().getFullYear()
//     };
//     document.write(`car color: ${carObj.carColor}  car brand: ${carObj.carBrand}  car smk: ${carObj.carSmk}  car year: ${carObj.carYear}`);
// }
// mission14(prompt("enter car color"),prompt("enter car brand"),prompt("enter car smk"));
// **********************__14__************************


// **********************__15__************************
// function mission15(carColor, carBrand, carSmk) {
//     var carObj = {
//         carColor: carColor,
//         carBrand: carBrand,
//         carSmk: carSmk,
//     };
//     document.write(`<div>car color: ${carObj.carColor}  car brand: ${carObj.carBrand}  car smk: ${carObj.carSmk}</div>`)
// }
// mission15(prompt("enter car color"),prompt("enter car brand"),prompt("enter car smk"));
// **********************__15__************************


// **********************__16__************************
// function mission16(carColor, carBrand, carSmk) {
//     var carObj = {
//         carColor: carColor,
//         carBrand: carBrand,
//         carSmk: carSmk,
//         carYear: new Date().getFullYear()
//     };
//     document.write(`<div><p>car color:${carObj.carColor}</p>  <p>car brand:${carObj.carBrand}</p>  <p>car smk:${carObj.carSmk}</p><p>car year:${carObj.carYear}</p></div>`)
// }
// mission16(prompt("enter car color"),prompt("enter car brand"),prompt("enter car smk"));
// **********************__16__************************


// **********************__17__************************
// function mission17(carColor, carBrand, carSmk) {
//     var carObj = {
//         carColor: carColor,
//         carBrand: carBrand,
//         carSmk: carSmk,
//         carYear: new Date().getFullYear()
//     };
//     document.write(`<div><p id="colorP">car color:${carObj.carColor}</p>  <p id="brandP">car brand:${carObj.carBrand}</p>  <p id="smkP">car smk:${carObj.carSmk}</p><p id="yearP">car year:${carObj.carYear}</p></div>`)
// }
// mission17(prompt("enter car color"),prompt("enter car brand"),prompt("enter car smk"));
// **********************__17__************************