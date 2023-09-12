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
    validateDetails(contact);
    this.contacts.push(contact);
    console.log("Contact Added " + contact.FirstName);}

    duplicateContact(contact)
    {
        if(this.contacts.some((element)=> element.FirstName == contact.FirstName))
        {
            console.log("Contact is Already Existing");
        }
        else{
            this.addNewContact(contact)
        }
    }
    
    displayContactDetails() {
    this.contacts.forEach(element => {
        console.log("Full Name -->"+element.FirstName +" "+element.LastName+" Phone Number -->"+element.PhoneNumber);
    });}

    EditContactDetails(contact){
        validateDetails(contact);
        this.contacts.forEach(element=>{
            if(contact.FirstName == element.FirstName)
            {
                element.LastName=contact.LastName;
                element.Address=contact.Address;
                element.City=contact.City;
                element.State=contact.State;
                element.Zip=contact.Zip;
                element.PhoneNumber=contact.PhoneNumber;
                element.Email=contact.Email;
                console.log("Address Book Edited Successfully");
            }

        });
    }
    DeleteContactDetails(name){
        var a=0;
        this.contacts.forEach(element=>
            {
               if(name == element.FirstName)
               {
                this.contacts.splice(a,1);       
                console.log("Contact Deleted Successfully");
               }
               a++;
            });
    }
    ContactCount()
    {
        const count = this.contacts.reduce((count,sum)=>{
        return count+1},0);
        console.log("Total Number of Contact in the Addressbook "+count);
    }

}
function validateDetails(Details) 
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
        else{
            console.log("Details Validate Successfully");
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
addressbook.addNewContact(Details2);    // Creating a new AddressBook and Add Contact in it.

const Details3 = new Contact(
    FirstName="John",
    LastName= "Peter",
    Address= "Street2",
    City= "Chennai",
    State= "TamilNadu",
    Zip= "500451",
    PhoneNumber= "6578912344",
    Email= "john@gmail.com");
addressbook.addNewContact(Details3);        // Adding a New Contact to addressbook.

const UpdatedContact = new Contact(
    FirstName="John",
    LastName= "Wick",
    Address= "Street1",
    City= "Chennai",
    State= "TamilNadu",
    Zip= "500451",
    PhoneNumber= "6578912388",
    Email= "john@gmail.com");
addressbook.EditContactDetails(UpdatedContact)  //Edit Details of contact in the AddressBook.

//addressbook.DeleteContactDetails("Ghejd");       // Delete The Contact in the AddressBook.
addressbook.displayContactDetails();  //Display the contact in the AddressBook.
addressbook.ContactCount();           //Count the number

addressbook.duplicateContact(Details3);        // Find Duplicate element in the AddressBook
