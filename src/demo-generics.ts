interface Contakt {
  id: number;
  name: string;
}

interface UserContakt { // <TExternalId>
  id: number
  name: string
  username: string
  // externalId: TExternalId
  // loadExternalId(): Task<TExternalId>
}

function clone<T1, T2 extends T1>(source: T1): T2 {
  // source = source
  return Object.apply({}, source);
}

const a: Contakt = { id: 123, name: "Homer Simpson" };
const b = clone<Contakt, UserContakt>(a)
console.log("a", a)
console.log("b", b)

const dateRange = { startDate: Date.now(), endDate: Date.now() }
const dateRangeCopy = clone(dateRange)
console.log("dateRange", dateRange)
console.log("dateRangeCopy", dateRangeCopy)