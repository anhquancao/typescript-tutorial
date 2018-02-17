var names = new Array(4);
console.log(names);
names = new Array("Cao", "Anh", "Quan");
console.log(names);
names = names.concat(["Ninh"]);
console.log(names);
var j;
for (j in names) {
    console.log(names[j]);
}
