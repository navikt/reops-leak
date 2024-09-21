FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /usr/src/app
COPY . .

ENV PORT=3000

CMD ["./dist/server/entry.mjs"]

EXPOSE $PORT