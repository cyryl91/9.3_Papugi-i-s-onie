var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var upperAnimal = animal.toUpperCase();
//console.log(upperAnimal);
var replaceText = text.replace('Papugi', upperAnimal);
var part = replaceText.length/2;
console.log(replaceText.substr(0, part));