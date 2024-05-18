
//                                  pages call this
function generateNavBar() {

    //-----------INPUT NAVBAR ELEMENTS HERE----
    let navItems = [
        {
            text: 'Kobe Hayes', href: 'index.html',
        },
        {
            text: 'Graphic Design', href: 'graphic-design.html', dropdown: [
                { text: 'Can Anything Be Performance Art', href: '#' },
                { text: 'AUX Magazine', href: '#' },
                { text: 'Apollo 11', href: '#' },
                { text: 'Animal Farm', href: '#' },
            ]
        },
        {
            text: 'Video', href: 'video.html', dropdown: [
                { text: 'asdf', href: '#' },
                { text: 'asdf', href: '#' },
                { text: 'asdf', href: '#' },
            ]
        },
        {
            text: 'Audio', href: 'audio.html', dropdown: [
                { text: 'asdf', href: '#' },
                { text: 'asdf', href: '#' },
                { text: 'asdf', href: '#' },
            ]
        },
        {
            text: 'Photography', href: 'photography.html', dropdown: [
                { text: '35mm Photography', href: '#' },
                { text: 'Digital Photography', href: 'photography.html#digital-photos' },

            ]
        },
        {
            text: 'Typeface', href: 'typeface.html', dropdown: [
                { text: 'Process', href: '#' },
                { text: 'Sketches', href: '#' },

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

    //---------resize images dynamically
    window.addEventListener('resize', () => {
        let img = document.querySelector('img');
        img.width = window.innerWidth / 1.5; // half of the window's width
        //   img.height = img.width * (img.naturalHeight / img.naturalWidth); // maintain aspect ratio
    });
}

//---------animate h1 on scroll
window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let headers = document.getElementsByClassName('scroll-header');
    if (headers.length > 0) {
        headers[0].style.left = scrollPosition + 'px';
    }
});

