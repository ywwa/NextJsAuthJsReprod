# Reproduction Repo

1. Start containers

```sh
docker compose up -d
docker exec -it reprodapp sh
npx drizzle-kit push
exit
docker logs reprodapp -f # Keep logs open
```

2. Navigate to `localhost:3000/` and make sure that `localStorage` and `Cookies` are empty

Looking at logs there are no errors at all. For now.

3. Click on SignIn button

And now there are errors in logs
