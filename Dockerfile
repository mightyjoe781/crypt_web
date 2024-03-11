# Stage 1
FROM node:20-alpine as build_stage
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run semantic:build
RUN npm run build


# Stage 2
FROM nginx:alpine as production_stage
# copy nginx conf
RUN rm /etc/nginx/conf.d/*
COPY ./nginx/default.conf /etc/nginx/conf.d/

# copy build files
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build_stage /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]