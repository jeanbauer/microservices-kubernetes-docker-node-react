`kubectl apply -f posts.yaml `
> pod/posts created

`kubectl get pods`
> NAME    READY   STATUS    RESTARTS   AGE
> posts   1/1     Running   0          36s

# Deployment Job
- If some pod fails Deployment will back up it.
- If we update the code of one Container the Deployment will do the versioning for us.