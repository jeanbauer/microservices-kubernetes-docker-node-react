# This code is not meant to production

> This is the result of this Udemy course. 📚
https://www.udemy.com/course/microservices-with-node-js-and-react


## How to deploy it
> To be done.


## Architecture
./event-bus/architecture.png

## With Docker
./event-bus/with-docker.png

## With Kubernetes
./event-bus/with-kubernetes.png


## Skaffold

Every time we make a change to some file we have to apply abd restart these changes to k8s, but with Skaffold (skaffold.dev) it watches those changes and do it automatically. It also create and delete objects inside the cluster when start/stop.

Skaffold also takes the JS that changed on the "source" file and paste inside the pod 🤯🤯🤯.