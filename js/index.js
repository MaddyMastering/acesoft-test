function openSidebar() {
    document.querySelector('body').classList.add('no-overflow');
    document.getElementById('aside').classList.add('open');
    document.querySelector('.overlay').classList.add('show');
}

function closeSidebar() {
    document.querySelector('body').classList.remove('no-overflow');
    document.getElementById('aside').classList.remove('open');
    document.querySelector('.overlay').classList.remove('show');
}

function gotoContact() {
    window.location.href = '/contact.html';
}

function gotToAboutUs() {
    window.location.href = '/about-us.html';
}

function toggleMobileMenu() {
    document.getElementById("mobile-menu").classList.toggle("open");
}

function toggleDropdown(element) {
    element.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function (e) {
    // tabs
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Deactivate all
            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Activate clicked tab
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // accordion
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;

            // Collapse all others
            document.querySelectorAll(".accordion-content").forEach(el => {
                if (el !== content) el.classList.remove("active");
            });
            document.querySelectorAll(".accordion-header").forEach(btn => {
                if (btn !== header) btn.classList.remove("open");
            });

            // Toggle current one
            content.classList.toggle("active");
            header.classList.toggle("open");
        });
    });
});