//Metodo HTTP: Get(busca) Post(criar) Put(atualizar) Patch(atualizar info especifica) Delete
import fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/', async () => {
    const habits = await prisma.habit.findMany({

    })
    return habits
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server listening on port 3333')
});