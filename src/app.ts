import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Alice',
    email: 'teste@teste.colm',
  },
})

export default app
