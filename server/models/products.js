const mysqlcon = require('../../connection');

//create table products

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS products(
        product_id int(10) primary key,
        img varchar(22),
        category varchar(66),
        product_name varchar(66), 
        price int(10),
        material varchar(56),
        color varchar(26)
        )`;
    mysqlcon.query(sql);
  }

//update initial products

function add() {
    mysqlcon.query('select * from products', function (err, result) {
        if(result.length === 0){ 
            let sqlrun = `insert into products values
            (1, 'img/j1.jpg', 'Jewellery', 'Afgani Jewelery', 15, 'Oxidised', 'silver'), 
            (2, 'img/j2.jpg', 'Jewellery', 'Afgani Jewelery', 25, 'Oxidised', 'silver'),
            (3, 'img/m1.jpg', "Men's Wear", 'Kurta', 45, 'Cotton', 'blue'),
            (4, 'img/m2.jpg', "Men's Wear", 'Kurta', 35, 'Pure Cotton', 'pink'),
            (5, 'img/f1.jpg', "Women's Wear", 'Kurti', 35, 'Pure Cotton', 'yellow'),
            (6, 'img/f2.jpg', "Women's Wear", 'Kurti with Palazzo', 50, 'Silk', 'grey'),
            (7, 'img/f3.jpg', "Women's Wear", 'Kurti with Palazzo', 45, 'Cotton', 'yellow'),
            (8, 'img/f4.jpg', "Women's Wear", 'Saree', 55, 'Silk', 'cream'),
            (9, 'img/f5.jpg', "Women's Wear", 'Saree', 50, 'Synthetic', 'green')
            `;
            mysqlcon.query(sqlrun, (err, result) => {
                if(err) throw err;
            });
}
});
}  


  module.exports = {create, add};