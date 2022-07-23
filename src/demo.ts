interface Contact extends Address {
  id: number
  name: ContactName // type
  birthDate?: Date // optional
  status: ContactStatus // enum
}

interface Address {
  line1: string
  line2?: string
  city: string
  state: string
  zipcode: number
}

type ContactName = string

enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  New = "new"
}

let primaryContact: Contact = {
  id: 2,
  name: "McGee",
  birthDate: new Date("07/27/2022"),
  status: ContactStatus.Active,
  // Address
  line1: "HEY HEY HEY",
  city: "Fort Bragg",
  state: "CA",
  zipcode: 95437

  // return() {
  //   this.id,
  //   this.name,
  //   this.birthDate
  // }
}

console.log(primaryContact)