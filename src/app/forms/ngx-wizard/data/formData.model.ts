// Wizard form data class Starts
export class FormData {
    firstName = '';
    lastName = '';
    email = '';
    work = '';
    street = '';
    city = '';
    state = '';
    zip = '';

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}
// Wizard form data class Ends

// Personal tab data class starts
export class Personal {
    firstName = '';
    lastName = '';
    email = '';
}
// Personal tab data class ends

// Address tab data class starts
export class Address {
    street = '';
    city = '';
    state = '';
    zip = '';
}
// Address tab data class Ends
