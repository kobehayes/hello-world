

//-----------INPUT NAVBAR ELEMENTS HERE----
let navItems = [
    {
        text: 'Home', href: 'index.html', 
    },
    {
        text: 'Interactive', href: 'a-page.html', dropdown: [
            { text: subTitle1, href: '#' },
            { text: subTitle2, href: '#' },
            { text: subTitle3, href: '#' },
        ]
    },
    {
        text: 'Photography', href: 'b-page.html', dropdown: [
            { text: subTitle1, href: '#' },
            { text: subTitle2, href: '#' },
            { text: subTitle3, href: '#' },
        ]
    },
    {
        text: 'Paintings', href: 'c-page.html', dropdown: [
            { text: subTitle1, href: '#' },
            { text: subTitle2, href: '#' },
            { text: subTitle3, href: '#' },
        ]
    },

];

//                                  pages call this
function generateNavBar() {
    let navBar = document.getElementById('navbar');

    for (let item of navItems) {

        let a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;
        navBar.appendChild(a);

        let div = document.createElement('div');
        div.className = 'dropdown';

        let dropdownContent = document.createElement('div');
        dropdownContent.className = 'dropdown-content';

        for (let work of works) {
            let a = document.createElement('a');
            a.textContent = work.title;

            dropdownContent.appendChild(a);
        }

        div.appendChild(dropdownContent);
        navBar.appendChild(div);
    }
}

function populate() {
    //                      populating pages with artwork


let worksDiv = document.getElementById('works');

for (let work of works) {
    let worksHTML = `
                <div>
                    <img src="${work.photo}" alt="${work.title}">
                     <p>${work.date}</p>
                    <h2>${work.title}</h2>
                   
                </div>
            `;

    worksDiv.innerHTML += worksHTML;
}
}