const { promisify } = require('util');
const req = require('request');
const request = promisify(req);

module.exports = class Application {
    async init() {
        try {

            // const { stdout, stderr } = await exec("node ");
            const resp = await request('https://6133c9827859e700176a37ab.mockapi.io/api/v1/delivery/up', {
                id: 120
            });

            if (resp.body) {
                console.log('Event: Ok, 200...')
            }

            return;

        } catch (e) {
            console.error(e);
        }
    }
}