import { z } from 'zod'

export async function handler() {
  const randomSchema = z.object({
    description: z
      .string()
      .min(1, { message: 'Must be 1 or more characters long' })
      .max(255, { message: 'Must be 255 or fewer characters long' }),
  })

  const randomObject = randomSchema.parse({ description: 'tá top!!!' })

  return {
    statusCode: 200,
    body: JSON.stringify(randomObject),
  }
}
