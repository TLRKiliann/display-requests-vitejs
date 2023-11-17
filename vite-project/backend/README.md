# INSTALLATION

$ pnpm init

$ pnpm install

$ pnpm add express dotenv cors mariadb typescript @types/express @types/node@ts 

$ tsc --init

$ pnpm add @types/express @types/node@ts 

$ pnpm add -g ts-node

$ pnpm add -g json-server


``` 
(package.json)
    "scripts": {
        "start": "ts-node index.ts",
        "server": "json-server -p3001 --watch db.json"
  }
```

## RUN

server.ts

$ pnpm run start

json-server

$ pnpm run server

