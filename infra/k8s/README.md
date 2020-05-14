`kubectl apply -f posts.yaml `
> pod/posts created

`kubectl get pods`
> NAME    READY   STATUS    RESTARTS   AGE
> posts   1/1     Running   0          36s

# Deployment Job
- If some pod fails Deployment will back up it.
- If we update the code of one Container the Deployment will do the versioning for us.


`k apply -f posts-srv.yaml`
> service/posts-srv created

`k get services`

```
NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
kubernetes   ClusterIP   xxx             <none>        443/TCP          126m
posts-srv    NodePort    xxxx            <none>        4000:31858/TCP   11s
```

How to access the k8s newest service (node port) that we just created?

`k describe services posts-srv` to get the IP (or copy from prev command)

and go to `http://localhost:<IP>/posts`


### Cluster IP Service location

There is people that creates a separated file to each cluster IP service, but since most of the relationships between Service and POD are 1:1 this repo uses the same POD file (Deployment) separated with `---`.

