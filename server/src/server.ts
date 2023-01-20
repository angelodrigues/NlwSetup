//Metodo HTTP: Get(busca) Post(criar) Put(atualizar) Patch(atualizar info especifica) Delete

import fastify from "fastify";

const app = fastify();

app.get('/', () => {
    return 'Hello world'
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP Server listening on port 3333')
});