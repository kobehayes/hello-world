
//                                  pages call this
function generateNavBar() {

    //-----------INPUT NAVBAR ELEMENTS HERE----
    let navItems = [
        {
            text: 'Kobe Hayes', href: 'index.html',
            class: 'padded-right'
        },
        {
            text: 'Graphic Design', href: 'graphic-design.html', dropdown: [
                { text: 'Can Anything Be Performance Art', href: '#' },
                { text: 'AUX Magazine', href: '#' },
                { text: 'Apollo 11', href: '#' },
                { text: 'Animal Farm', href: '#' },
            ]
        },
        // {
        //     text: 'Analog', href: 'analog.html', dropdown: [
        //         { text: 'asdf', href: '#' },
        //         { text: 'asdf', href: '#' },
        //         { text: 'asdf', href: '#' },
        //     ]
        // },
        {
            text: 'Time-Based', href: 'time-based.html', dropdown: [
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
        {
            text: 'About', href: 'about.html', dropdown: [
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
        // Calculate a scale factor based on the scroll position. 
        // This will make the header shrink as the user scrolls down.
        // Adjust the divisor to control how quickly the header shrinks.
        let scaleFactor = 1 - (scrollPosition / 800);

        // Ensure the scale factor doesn't go below 0
        if (scaleFactor < 0) scaleFactor = 0;

        // Apply the scale transformation to the header
        headers[0].style.transform = `scale(${scaleFactor})`;
    }
});

function generateFooter(name, contactInfo) {
    // Create a new footer element
    let footer = document.createElement('footer');

    // Set the inner HTML of the footer
    footer.innerHTML = `
        <div class="footer-content">
            <p>Kobe Hayes</p>
            <p>kobehayes1@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/kobehayes/">LinkedIn</a></p>

<p><a href="https://www.instagram.com/k.be?igsh=MXRud2prZTJ0a3FldQ%3D%3D&utm_source=qr">Instagram</a></p>   
        </div>
    `;

    // Append the footer to the body
    document.body.appendChild(footer);
}

// Call the function with the name and contact info
generateFooter();