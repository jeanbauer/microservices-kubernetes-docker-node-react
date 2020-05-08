# How it works

To build the image: `docker build .`
> this will return the image id.

To create an instance of the image: `docker run <id>`

# Cheatsheet

- build an image based on the dockerfile in the current directory. Tag it as 'jeanbauer/posts': `docker build -t jeanbauer/posts .`

- Create and start a container based on the provided image or tag: `docker run [image id or image tag]`

- Create and start a continaer, but also override the default command: `docker run -it [image id or imaget tag] [cmd]`

- Print out information about all of the running container: `docker ps`

- Execute the given command in a running container: `docker exec -it [container id] [cmd]`

- Print out logs from the given container: `docker logs [container id]`
