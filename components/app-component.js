export class AppComponent extends HTMLElement {

    /** called on html display */
    connectedCallback() {
        this.display();
        this.bindElements();
        this.bindEvents();
        this.onReady();
    }

    display() { }
    bindElements() { }
    bindEvents() { }
    onReady() { }
}