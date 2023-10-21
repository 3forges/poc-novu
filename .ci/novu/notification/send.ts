import { Novu } from '@novu/node'; 

const novu = new Novu(`${process.env.NOVU_API_KEY}`);

const resultIs = await novu.trigger(`${process.env.NOVU_TRIGGER_IDENTIFIER}`, {
    to: {
      subscriberId: `${process.env.NOVU_SUBSCRIBER_ID}`
    },
    payload: {
      description: `${process.env.NOVU_NOTIF_MSG}`
    },
    tenant: `${process.env.NOVU_TENANT_IDENTIFIER}`,
  });

console.log(` The Novu API full request/response was: `, resultIs)
console.log(`# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---#`)
console.log(`# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---#`)
console.log(`# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---# >>> ---#`)
console.log(` The Novu API HTTP response status is : [${resultIs.status} ${resultIs.statusText}]`)
console.log(` The Novu Subscriber created is: `, resultIs.data)

  