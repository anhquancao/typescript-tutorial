let names = new Array(4);
console.log(names);
names = new Array("Cao", "Anh", "Quan");
console.log(names);
names = [...names, "Ninh"];
console.log(names);

let j: string;
for (j in names) {
    console.log(names[j]);
}
