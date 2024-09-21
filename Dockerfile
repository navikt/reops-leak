FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /usr/src/app
COPY . .

CMD ["./dist/server/entry.mjs"]