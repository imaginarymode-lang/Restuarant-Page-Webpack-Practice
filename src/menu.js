const menuItems = ["Biryani: A mixed rice dish packed with aromatic spices and usually chicken, mutton, or vegetables."
    ,"Butter Chicken: Tender chicken pieces cooked in a mild, creamy tomato sauce."
,"Masala Dosa: A thin, crispy fermented rice and lentil crepe stuffed with spiced potatoes."
,"Naan: A soft, leavened flatbread typically baked in a clay oven."
,"Paneer Butter Masala: Cubes of paneer cooked in a rich, creamy, and slightly sweet tomato, cashew, and butter gravy."
,"Gulab Jamun: Soft, berry-sized milk-solid dumplings fried and soaked in a warm cardamom and rosewater-infused sugar syrup."]


export function showMenu(content, clearContent) {
    clearContent();
    const container = document.createElement('div');
    menuItems.forEach((menuItem) => {
        const item = document.createElement('p');
        item.textContent = menuItem;
        container.appendChild(item);
    });
    content.appendChild(container);
}
