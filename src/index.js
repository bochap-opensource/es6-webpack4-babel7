import Controller from './Controller';

export default (function (window, document, containerName){
    const controller = new Controller(window, document, containerName);
})(window, document, 'container');