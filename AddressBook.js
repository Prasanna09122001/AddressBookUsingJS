class Contact {
    constructor(FirstName, LastName, Address, City, State, Zip, PhoneNumber, Email) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Zip = Zip;
        this.PhoneNumber = PhoneNumber;
        this.Email = Email;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];}
    
    addNewContact(contact) {
    this.contacts.push(contact);
    console.log("Contact Added " + contact.FirstName);}

    displayContactDetails() {
    this.contacts.forEach(element => {
        console.log("Full Name -->"+element.FirstName + element.LastName+" Phone Number -->"+element.PhoneNumber);
    });}
}



const addressbook=new AddressBook();
const Details1 = new Contact("A", "A", "A", "A", "A", "A", "9987887678", "a@gmail.com");
const Detaisl2 = new Contact("B", "B", "B", "B", "B", "B", "6578988712", "b@gmail.com");
addressbook.addNewContact(Details1);
addressbook.addNewContact(Detaisl2);
addressbook.displayContactDetails();

