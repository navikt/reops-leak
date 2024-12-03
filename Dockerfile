FROM gcr.io/distroless/nodejs22-debian12

WORKDIR usr/src/app

COPY ./dist ./dist
COPY ./node_modules ./node_modules

CMD ["./dist/server/entry.mjs"]

EXPOSE 3000