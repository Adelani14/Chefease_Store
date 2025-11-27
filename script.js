const ArrayList = JSON.parse(localStorage.getItem('ProductList')) || [];

const addToCart = (button) => {
    let CartNumber = 0;


    const Products = {
        Name: button.dataset.name,
        Description: button.dataset.description,
        Price: button.dataset.price,
        Image: button.dataset.image,
        Quantity: 1

    }

    const exists = ArrayList.some(item => item.Name === Products.Name);

    if (exists) {
        button.innerHTML = `<small style="color:red;">Product already in Carts!</small>`
        setTimeout(()=>{
            button.innerHTML='Added'
        },1500)
       
        return;
    } else {



        ArrayList.push(Products)
        // console.log(ArrayList);
        for (let i = 0; i < ArrayList.length; i++) {
            cartCount.innerHTML = CartNumber + i + 1;
            button.innerHTML = 'Added'


        }

        localStorage.setItem('ProductList', JSON.stringify(ArrayList))



    }
}




window.addEventListener('load', () => {
    let cartN = JSON.parse(localStorage.getItem('ProductList')) || [];

    cartCount.innerHTML = cartN.length
})





