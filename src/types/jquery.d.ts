declare type JQuery = any
declare var $: JQuery

// fixes ts: "Cannot augment module 'JQuery' with value exports because it resolves to a non-module entity. ts(2649)"
export {}
