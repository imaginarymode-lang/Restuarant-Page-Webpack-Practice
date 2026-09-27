const homeContent = "Namaste *~~* and Glad You visited our Retuarant. Hope you experience our food with exciting and fun.";
export function showHome(content, clearContent) {
    clearContent();
    const container = document.createElement('div');
    const header = document.createElement('h1');
    const para = document.createElement('p');
    const item = document.createElement('p');
    header.textContent = "Our Genuine Restaurant";
    para.textContent = "We established our genuine restuarant with passion cooking and is based on indian cuisine. We Hope You Enjoy It.";
    item.textContent = homeContent;
    container.appendChild(item);
    container.appendChild(header);
    container.appendChild(para);
    content.appendChild(container);
}


