const product = [
    {
        id: 0,
        image: 'assets/img1.jpg',
        title: 'Da Vincci 1',
        price: 120,
    },
    {
        id: 1,
        image: 'assets/img2.jpg',
        title: 'Da Vincci 2',
        price: 60,
    },
    {
        id: 2,
        image: 'assets/img3.jpg',
        title: 'Malaga',
        price: 230,
    },
    {
        id: 3,
        image: 'assets/img4.jpg',
        title: 'Malaga 2',
        price: 100,
    },
    {
        id: 4,
        image: 'assets/img7.jpg',
        title: 'Malaga 3',
        price: 230,
    },
    {
        id: 5,
        image: 'assets/img5.jpg',
        title: 'Copa Cabana',
        price: 100,
    },
    {
        id: 6,
        image: 'assets/img15.jpg',
        title: 'Room Discovery',
        price: 50,
    },
    {
        id: 7,
        image: 'assets/img8.jpg',
        title: 'Room Harmony',
        price: 60,
    },
    {
        id: 8,
        image: 'assets/img10.jpg',
        title: 'Room Meldoy',
        price: 50,
    },
    {
        id: 9,
        image: 'assets/img12.jpg',
        title: 'Room Planetarium',
        price: 50,
    },
    {
        id: 10,
        image: 'assets/img11.jpg',
        title: 'Room La Playa',
        price: 50,
    },
    {
        id: 11,
        image: 'assets/img14.jpg',
        title: 'Room Paradise',
        price: 50,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                <a href="booknow.html">Check Booking</a>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);