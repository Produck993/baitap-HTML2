// tinh tong cac so le trong 1 mang
var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];

function sole(mang) {
    var tong = 0;
   for (var i = 0; i < mang.length; i++) {
       if (mang[i] % 2 !=0)   
            tong = tong + mang[i];
   }
   return(tong)
};
console.log(sole(mang));
