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
const Details1 = new Contact(
    FirstName="A",
    LastName= "A",
    Address= "A",
    City= "A",
    State= "A",
    Zip ="A",
    PhoneNumber= "9987887678",
    Email= "a@gmail.com");
const Detaisl2 = new Contact(
    FirstName="B",
    LastName= "B",
    Address= "B",
    City= "B",
    State= "B",
    Zip= "B",
    PhoneNumber= "6578988712",
    Email= "b@gmail.com");

addressbook.addNewContact(Details1);
addressbook.addNewContact(Detaisl2);
addressbook.displayContactDetails();

