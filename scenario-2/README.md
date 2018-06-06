## 2 peas in a pod ...

### Deploy `ping-server` + `pong-server`

From within this folder run the following command:

```shell
# create namespace scenario-1
kubectl create -f scenario-2-namespace.yaml
# create deployment (pods) and services
kubectl -n scenario-2 create -f pingpong-deployment.yml -f pong-server-service.yml -f ping-server-service.yml
```

### What just happened ?

1. Created a namespace named `scenario-2` from
Created a deployment from `scenario-2-namespace.yaml`
2. Created a deployment from `pingpong-deployment.yml`

3. Created a ping service from `ping-server-service.yml` which points the ping-server to the pingpong pod on port 8080

4. Created a pong service from `pong-server-service.yml` which points the pong-server to the pingpong pod on port 8081

### Test-drive ...

1. get the pod name:
  ```shell
  POD=$(kubectl get pod -n scenario-2 -l run=pingpong -o jsonpath="{.items[0].metadata.name}")
  ```

2. In one terminal (split/tmux etc) port-forward to ping-server:

  ```shell
  kubectl -n scenario-2 port-forward ${POD} 8080:8080
  ```

3. In a second terminal port-forward to pong-server:

  ```shell
  kubectl -n scenario-2 port-forward ${POD} 8081:8081
  ```

4. From you a third terminal:

  4.1 check ping-server:
      `wget -qO- localhost:8080` should yield `It Works!! Path Hit: /` - this means our ping server is actually working ...

  4.2 Check pong-server:

      `wget -qO- localhost:8081` should yield `Hello World!`

  4.3 Check ping and pong can talk to each other in local host:

      `wget -qO- localhost:8081/ping` should yield: **"pong"** which means the `ping-server` sent a **"ping"** and received a **"pong"** from the `pong-server` ... - the ping and the pong communicated over **127.0.0.1** within the pod ...

### Pods are just a "wrapper" for 1 or more containers ...
#### Let's prove that:

1. Let's get our pod name like so:
```shell
POD=$(kubectl get pod -n scenario-2 -l run=pingpong -o jsonpath="{.items[0].metadata.name}")
```

2. In one terminal (split/tmux etc) connect to the pong server with kubectl exec like so:

  ```shell
  kubectl -n scenario-2 exec -it ${POD} -c pong-server sh
  # now your in the container pong-server ...
  /opt/app_#  netstat -npl | grep 80
tcp        0      0 :::8080                 :::*                    LISTEN      -
tcp        0      0 :::8081                 :::*                    LISTEN      1/node

  ```
2. In a second terminal connect to the ping server with kubectl exec like so:
  ```shell
  kubectl -n scenario-2 exec -it ${POD} -c ping-server sh
  hagzag@🌀scenario-2 👉  kubectl exec -it ${POD} -c ping-server sh
/opt/app_# netstat -npl | grep 80
tcp        0      0 :::8080                 :::*                    LISTEN      1/node
tcp        0      0 :::8081                 :::*                    LISTEN      -
  ```

## Recap

We created a pod with 2 containers (not very common but a good example to prove capabilities and pod behavior) a `Deployment` named "pingpong" holds 2 containers:
1. pong-server (which answers pong to ping)
2. ping-server (which sends pings to pong servers)

Established a service for each pod to expose the `8080` && `8081` ports to the receptive listen-port of the containers within it.

A simple port-forward proved how those work and services are forwarding the 8081/ping and receiving back a pong ...

## Whats Next ...
In our next Scenario we will separate this example to 2 Deployments, which will result in 2 pods and now we should see how to deal with that situation ...
