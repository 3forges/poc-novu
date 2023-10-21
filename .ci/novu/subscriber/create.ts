import { Novu } from '@novu/node';

const novu = new Novu(`${process.env.NOVU_API_KEY}`);

const resultIs = await novu.subscribers.identify(`${process.env.NOVU_SUBSCRIBER_ID}`, {
  firstName: `${process.env.NOVU_SUBSCRIBER_LASTNAME}`,
  lastName: `${process.env.NOVU_SUBSCRIBER_FIRSTNAME}`,
});

console.log(` The Novu API full request/response was: `, resultIs)
console.log(`# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---#`)
console.log(`# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---#`)
console.log(`# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---#`)
console.log(` The Novu API HTTP response status is : [${resultIs.status} ${resultIs.statusText}]`)
console.log(` The Novu Subscriber created is: `, resultIs.data)

