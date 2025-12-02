const container = document.getElementById("container");

mobiles.map(item => {
    container.innerHTML +=`
    <div class="w-[240px] p-5 m-5 border border-gray-300 rounded-md text-center inline-block">
    <img src="${item.image}" alt="${item.model}" class="w-[150px] h-[150px] object-cover mx-auto rounded-md">
    <h3 class="font-bold text-2xl">${item.brand}</h3>
    <h3>${item.model}</h3>
    <h4>${item.ram} / ${item.rom}</h4>
    <p class="pb-1">${item.price}</p>
    <a href="" class=" text-white border-1 bg-orange-500 px-2 py-1 mt-1 text-center items-center rounded-md border-orange-500">Add to cart</a>
    </div>`;
}
);