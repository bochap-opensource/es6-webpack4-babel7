class Controller {
    constructor(window, document, containerName) {
        this.__window = window;
        this.__document = document;
        this.__container = this.__document.getElementById(containerName);
        if (!this.__container) {
            throw 'Container element must be supplied';
        }
        this.__container.innerText = "Controller Loaded";
    }
}

export default Controller;