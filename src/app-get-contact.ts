// import * as $ from "jquery"
import $ from "jquery"
console.log("$", JSON.stringify($))

// async function getContact(contactId: number) {
//   const resp = await $.ajax({
//     url: `/contacts/${contactId}`,
//     dataType: "json",
//   })

//   console.log("$ resp", resp)

//   return {
//     id: +resp.id,
//     name: resp.name,
//     birthDate: new Date(resp.birthDate),
//   }
// }

// getContact(1).then((contact) => {
//   contact.id = 1234
//   contact.birthDate = new Date("12/12/1990")
// })

// getContact(2).then((contact) => {
//   console.log("Contact: ", JSON.stringify(contact))
// })
