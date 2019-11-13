import { AppComponent } from "./app-component.js";

const TEMPLATE = `
    <form action="" id="product-form">
        <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" id="product-name-input">
            <label class="mdl-textfield__label" for="product-name-input">Nom...</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" id="product-price-input">
            <label class="mdl-textfield__label" for="product-price-input">Prix...</label>
        </div>
        <!-- Colored raised button -->
        <button id="product-submit-btn"
            class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="button">
            OK
        </button>
    </form>
`;

export class ProductForm extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
        componentHandler.upgradeElements(this);
    }

    bindElements() {
        this.inputName = this.querySelector("#product-name-input");
        this.inputPrice = this.querySelector("#product-price-input");
        this.submitBtn = this.querySelector("#product-submit-btn");
    }

    bindEvents() {
        this.submitBtn.addEventListener('click', () => {
            this.submitEvent();
        })
    }

    submitEvent() {
        let product = {
            name: this.inputName.value,
            price: this.inputPrice.value
        };
        //  create event
        let event = new CustomEvent('create-product', {
            detail: product
        });
        // dispatch event
        document.dispatchEvent(event);
    }

}