function decodeAndInsert(linkString, className) {
    const linkText = atob(linkString);

    const linkElements = document.querySelectorAll(`.${className}`);

    linkElements.forEach(linkElement => {
        linkElement.href = linkText;
    });
}

window.onload = function() {
    const links = {
        eLink: 'aHR0cHM6Ly90aW55dXJsLmNvbS81Y3M4cmF3Yw==',
        tLink: 'aHR0cHM6Ly90aW55dXJsLmNvbS80ajVmYjk5Mgo=',
        wLink: 'aHR0cHM6Ly90aW55dXJsLmNvbS8zdjU3azdwYg=='
    };

    decodeAndInsert(links.eLink, 'eLink');
    decodeAndInsert(links.tLink, 'tLink');
    decodeAndInsert(links.wLink, 'wLink');
};
