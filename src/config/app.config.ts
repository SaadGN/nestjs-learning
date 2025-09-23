import { registerAs } from "@nestjs/config"

export default registerAs('database', () => ({
    environment : process.env.NODE_ENV || 'poduction',
}))
