

//              handles nav bar across pages
let navItems = [
    {
        text: 'Home', href: 'index.html', dropdown: [
            { text: 'Subitem 1', href: '#' },
            { text: 'Subitem 2', href: '#' },
            // Add more subitems as needed
        ]
    },
    {
        text: 'Interactive', href: 'a-page.html', dropdown: [
            { text: 'Subitem 1', href: '#' },
            { text: 'Subitem 2', href: '#' },
            // Add more subitems as needed
        ]
    },
    {
        text: 'Photography', href: 'b-page.html', dropdown: [
            { text: 'Subitem 1', href: '#' },
            { text: 'Subitem 2', href: '#' },
            // Add more subitems as needed
        ]
    },
    {
        text: 'Paintings', href: 'c-page.html', dropdown: [
            { text: 'Subitem 1', href: '#' },
            { text: 'Subitem 2', href: '#' },

        ]
    },

];
function generateNavBar() {
    let navBar = document.getElementById('navbar');

    for (let item of navItems) {


        let a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;
        navBar.appendChild(a);

        let div = document.createElement('div');
        div.className = 'dropdown';

        // let button = document.createElement('button');
        // button.className = 'dropbtn';
        // button.textContent = item.text;
        // div.appendChild(button);

        let dropdownContent = document.createElement('div');
        dropdownContent.className = 'dropdown-content';

        for (let subitem of item.dropdown) {
            let a = document.createElement('a');
            a.textContent = subitem.text;
            a.href = subitem.href;
            dropdownContent.appendChild(a);
        }

        div.appendChild(dropdownContent);
        navBar.appendChild(div);
    }
}
// function generateNavBar() {

//     let navBar = document.getElementById('navbar');

//     for (let item of navItems) {
//         let a = document.createElement('a');
//         a.textContent = item.text;
//         a.href = item.href;
//         navBar.appendChild(a);

//         // let b = document.createElement('b');
//         // b.textContent = item.text;
//         // pageHead.appendChild(b);
//     }
// }

// function generateTitle() {
//     let pageHead = document.getElementsByTagName('h1');
//     // populate h1 with navitem text [i]
//     let b = document.createElement('b');
//     pageHead.textcontent =
//         pageHead.appendChild(b);
// }

//          handles elements of each artwork
let works = [
    {
        photo: 'photo1.jpg',
        date: '2022-01-01',
        title: 'Title 1'
    },
    {
        photo: 'photo2.jpg',
        date: '2022-01-02',
        title: 'Title 2'
    },
    {
        photo: 'photo2.jpg',
        date: '2022-01-02',
        title: 'Title 2'
    }
];

let worksDiv = document.getElementById('works');

for (let work of works) {
    let worksHTML = `
                <div>
                    <img src="${work.photo}" alt="${work.title}">
                    <h2>${work.title}</h2>
                    <p>${work.date}</p>
                </div>
            `;

    worksDiv.innerHTML += itemHTML;
}