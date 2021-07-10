ARG APP_ROOT="/usr/src/app"
ARG USER=node 
ARG GROUP=node

FROM node:alpine AS build
ARG APP_ROOT
WORKDIR $APP_ROOT

COPY . $APP_ROOT
RUN yarn install --production --frozen-lockfil --network-timeout 100000 \
    && yarn add react-app-rewired \
    && yarn build

FROM node:lts-alpine@sha256:b2da3316acdc2bec442190a1fe10dc094e7ba4121d029cb32075ff59bb27390a
ARG APP_ROOT
ARG USER
ARG GROUP

WORKDIR $APP_ROOT
COPY --chown=$USER:$GROUP --from=build $APP_ROOT/node_modules $APP_ROOT/node_modules
COPY --chown=$USER:$GROUP --from=build $APP_ROOT/package.json $APP_ROOT
COPY --chown=$USER:$GROUP --from=build $APP_ROOT/build $APP_ROOT/build
COPY --chown=$USER:$GROUP --from=build $APP_ROOT/.env* $APP_ROOT/

RUN apk --update add --no-cache dumb-init \
    && yarn global add serve

USER $USER
EXPOSE 3000

CMD ["dumb-init", "yarn", "start:prod"]