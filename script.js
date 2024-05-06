
//                                  pages call this
function generateNavBar() {

    //-----------INPUT NAVBAR ELEMENTS HERE----
let navItems = [
    {
        text: 'Kobe Hayes', href: 'index.html', 
    },
    {
        text: 'Graphic Design', href: 'a-page/a-page.html', dropdown: [
            { text: 'How Does Sound Work', href: '#' },
            { text:'asdf', href: '#' },
            { text: 'asdf', href: '#' },
        ]
    },
    {
        text: 'Video', href: 'b-page/b-page.html', dropdown: [
            { text: 'asdf', href: '#' },
            { text: 'asdf', href: '#' },
            { text: 'asdf', href: '#' },
        ]
    },
    {
        text: 'Audio', href: 'c-page/c-page.html', dropdown: [
            { text: 'asdf', href: '#' },
            { text: 'asdf', href: '#' },
            { text: 'asdf', href: '#' },
        ]
    },

];

    let navBar = document.getElementById('navbar');

for (let item of navItems) {
    let a = document.createElement('a');
    a.textContent = item.text;
    a.href = item.href;

    let div = document.createElement('div');
    div.className = 'dropdown';

    if (item.dropdown) { // Check if the dropdown property exists
        for (let dropdownItem of item.dropdown) {
            // Access properties of the dropdown item
            let dropdownA = document.createElement('a');
            dropdownA.textContent = dropdownItem.text;
            dropdownA.href = dropdownItem.href;
            div.appendChild(dropdownA);
        }
    }

    let navItem = document.createElement('div');
    navItem.className = 'nav-item';
    navItem.appendChild(a);
    navItem.appendChild(div);
    navBar.appendChild(navItem);
}
}