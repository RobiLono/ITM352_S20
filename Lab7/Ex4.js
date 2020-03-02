name = 'Robi';

likesBeer = true;

console.log(name);

if (!likesBeer) { console.log('beer is something I dislike'); }
if (likesBeer) { console.log('I like beer!'); }


if (quantity > 1) {
    price = 100;
    if (quantity >= 10) {
        price = 50;
    }

    if (quantity >= 25) {
        price = 35;
    }
}
else
    price = "no purchase";

console.log(quantity + ' products will cost ' + price + ' each.');


