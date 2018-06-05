### Scenario 3 - splitting/scaling and exposing to the world

In this Scenario we will separate this example to 2 Deployments, which will result in 2 pods and now we should see how to deal with that situation ...


### Deploy `ping-server`

```shell
kubectl create -f ping-server-deployment.yml -f ping-server-service.yml
```


### Deploy `pong-server`

```shell
kubectl create -f pong-server-deployment.yml -f pong-server-service.yml
```
