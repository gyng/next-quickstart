FROM node:12.6.0-alpine as builder

# If package.json uses git, uncomment this
# RUN apk update \
#     && apk upgrade \
#     && apk add --no-cache git

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn install --frozen-lockfile \
    && yarn check --integrity \
    && yarn cache clean

ARG NODE_ENV=production
ARG VERSION

COPY . /usr/src/app
RUN yarn build && yarn export

RUN set -xe \
    && if [ "$VERSION" != "" ]; then echo "$VERSION" > /usr/src/app/out/version; fi

FROM nginx:1.17.1-alpine as runner

WORKDIR /usr/app

COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/out /usr/app

CMD ["nginx", "-g", "daemon off;"]
