const contactContent = "Email: GenuineRestaurant77@Gmail.com, Location: India, Phone Number: ##########";
export function showContact(content, clearContent) {
    clearContent();
    const container = document.createElement('div');
    const item = document.createElement('p');
    item.textContent = contactContent;
    container.appendChild(item);
    content.appendChild(container);
}