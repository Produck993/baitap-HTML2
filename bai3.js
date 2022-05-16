var a = parseInt(prompt('Nhap gia tri'));
var b = parseInt(prompt('Nhap gia tri'));

function tong2(a,b) {
    return a + b
};
function nhan(a,b) {
    return a * b
};
function chia(a,b) {
    return a / b
};
function tru(a,b) {
    return a - b
};

var tong = tong2(a,b);
var tru1 = tru(a,b);
var nhan1 = nhan(a,b);
var chia1 = chia(a,b);

document.write('Tổng của a và b là : ' + tong );
document.write('Tru của a và b là : ' + tru1 );
document.write('Nhan của a và b là : ' + nhan1 );
document.write('Chia của a và b là : ' + chia1 );