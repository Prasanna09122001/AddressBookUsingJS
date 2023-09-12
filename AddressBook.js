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
        this.contacts = [];
    }
    
    addNewContact(contact) {
    this.contacts.push(contact);
    console.log("Contact Added " + contact.FirstName);}

    displayContactDetails() {
    this.contacts.forEach(element => {
        console.log("Full Name -->"+element.FirstName + element.LastName+" Phone Number -->"+element.PhoneNumber);
    });}
}
function validateName(Details) 
    {
        if(!/^[A-Z][a-zA-Z]{2,}$/.test(Details.FirstName)) {
            throw new Error("Write the First Name Correctly");
        }
        else if(!/^[A-Z][a-zA-Z]{2,}$/.test(Details.LastName)) {
            throw new Error("Write the Last Name Correctly");
        }
        else if(!/^[0-9a-zA-Z]{4,}$/.test(Details.Address))
        {
            throw new Error("Write the Address Correctly");
        }
        else if(!/^[a-zA-Z]{4,}$/.test(Details.City))
        {
            throw new Error("Write the City Correctly");
        }
        else if(!/^[0-9a-zA-Z]{4,}$/.test(Details.State))
        {
            throw new Error("Write the State Correctly");
        }
        else if(!/^[0-9]{6}$/.test(Details.Zip))
        {
            throw new Error("Write the Zip Correctly");
        }
        else if(!/^[0-9]{10}$/.test(Details.PhoneNumber))
        {
            throw new Error("Write the Phone Correctly");
        }
        else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(Details.Email))
        {
            throw new Error("Write the Email Correctly")
        }
        else 
        {
             addressbook.addNewContact(Details);
        } 
    }


const addressbook=new AddressBook();
const Details1 = new Contact(
    FirstName="Abcd",
    LastName= "Zedf",
    Address= "Street1",
    City= "Chennai",
    State= "TamilNadu",
    Zip ="500001",
    PhoneNumber= "9987887678",
    Email= "abcd@gmail.com");
const Details2 = new Contact(
    FirstName="Ghejd",
    LastName= "Hjkil",
    Address= "Street1",
    City= "Chennai",
    State= "TamilNadu",
    Zip= "500001",
    PhoneNumber= "6578988712",
    Email= "ghejd@gmail.com");

addressbook.addNewContact(Details1);
addressbook.addNewContact(Details2);

validateName(Details1);       // Validating and Adding the contact to AddressBook
validateName(Details2)

const Details3 = new Contact(
    FirstName="John",
    LastName= "Peter",
    Address= "Street2",
    City= "Chennai",
    State= "TamilNadu",
    Zip= "500451",
    PhoneNumber= "6578912344",
    Email= "john@gmail.com");
validateName(Details3);        // Adding a New Contact to addressbook

addressbook.displayContactDetails();  

