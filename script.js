

//              handles nav bar across pages
let navItems = [
    { text: 'Home', href: 'index.html' },
    { text: 'Interactive', href: 'a-page.html' },
    { text: 'Photography', href: 'b-page.html' },
    { text: 'Paintings', href: 'c-page.html' },
    // Add more items as needed
];

function generateNavBar() {

    let navBar = document.getElementById('navbar');

    for (let item of navItems) {
        let a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;
        navBar.appendChild(a);

        // let b = document.createElement('b');
        // b.textContent = item.text;
        // pageHead.appendChild(b);
    }
}

function generateTitle() {
    let pageHead = document.getElementsByTagName('h1');
    // populate h1 with navitem text [i]
    let b = document.createElement('b');
    pageHead.textcontent =
        pageHead.appendChild(b);
}

//              handles title for each page
// function changePageTitle(setTitle) {
//     // Get the title element
//     let titleElement = document.querySelector('title');
//     let element = document.getElementById('title');
//     element.textContent = theTitle;
//     titleElement.textContent = setTitle;
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