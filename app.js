const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe.user;

document.getElementById("user").innerHTML =
user
? `Xin chào ${user.first_name}`
: "Mở Mini App trong Telegram";

const products = [
    {
        name:"Clone lv5",
        price:"5.000đ"
    },
    {
        name:"Proxy antiband",
        price:"10.000đ/day
              40.000đ/week
               70.000đ/month
                120.000/vv"
    }
];

const box = document.getElementById("products");

products.forEach(p=>{

box.innerHTML += `
<div class="card">
<h3>${p.name}</h3>
<p>${p.price}</p>
<button>Mua ngay</button>
</div>
`;

});
