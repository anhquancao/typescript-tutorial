/**
 * Objects as function parameters
 */
var person = {
    firstName: "Tom",
    lastName: "Hanks"
};
var invokePerson = function (obj) {
    console.log("first name :" + obj.firstName);
    console.log("last name :" + obj.lastName);
};
invokePerson(person);
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
//Valid
var newPoint = addPoints({ y: 4, x: 3 }, { x: 5, y: 1 });
//Error
// var newPoint2 = addPoints({ x: 1 }, { x: 4, y: 3 });
