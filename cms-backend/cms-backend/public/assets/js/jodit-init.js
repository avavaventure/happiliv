document.addEventListener("DOMContentLoaded", function () {
    initializeJodit();
});

function initializeJodit() {
    const config = {
        toolbarSticky: false,
        height: 300,
        buttons: [
            "bold", "italic", "underline",
            "ul", "ol",
            "font", "fontsize",
            "paragraph", "lineHeight",
            "file", "image",
            "spellcheck", "table", "link",
            "symbols", "source", "fullsize", "preview"
        ]
    };

    const editors = document.querySelectorAll(".jodit-editor");
    // console.log('Found', editors.length, 'Jodit editor elements');

    editors.forEach(el => {
        if (!el.joditEditor) {
            el.joditEditor = new Jodit(el, config);
            console.log("✓ Jodit initialized:", el.id);
        }
    });
}
