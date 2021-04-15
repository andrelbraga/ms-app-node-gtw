import 'module-alias/register'
import app from '@/main/config/app'
import env from '@/main/config/env'

app.listen(env.httpPort, () => console.log(`http -> http://localhost:${env.httpPort}/api${env.apiVersion}`))
