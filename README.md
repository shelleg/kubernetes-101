# kubernetes 101

The following repo was designed to demonstrate kubernetes functionality.
Starting from `minikube` and scaling into a "full-blown" cluster, follow the `Scenario-#` dirs and their corresponding `README.md` files.

## Scenarios:

1. Scenario 1 - demo-app show native pod load balancing
2. Scenario 2 - "ping pong" client and server external service calling an internal services
3. Scenario 3 - "ping pong" ingress ping pong client and server external services which communicate with one another via the external service

## Pre requirements:
- `kubectl`
- `minikube`
- recommended `jq`

## Project Structure:

```
|-- README.md
|-- Scenario-1                      # simple ingress example [ complete ]
|   |-- README.md                   # scenario readme
|   |-- deployment.yml              # demo-app deployment spec
|   |-- ingress.yml                 # demo-app ingress spec
|   `-- service.yml                 # demo-app service spec
|-- Scenario-2                      # bind 2 services without ingress
|   |-- README.md                   # scenario readme [ complete ]
|   |-- demo-client-deployment.yml  # client deployment spec
|   |-- demo-client-service.yml     # client service spec
|   |-- demo-server-deployment.yml  # server deployment spec
|   `-- demo-server-service.yml     # server service spec
|-- Scenario-3                      # bind 2 services with ingress [ incomplete ]
|   |-- README.md                   # scenario readme
|   |-- demo-client-deployment.yml  # client deployment spec
|   |-- demo-client-ingress.yml     # client ingress spec
|   |-- demo-client-service.yml     # client service spec
|   |-- demo-server-deployment.yml  # server deployment spec
|   |-- demo-server-ingress.yml     # server ingress spec
|   `-- demo-server-service.yml     # server service spec
|-- app                             # demo-apps dir
|   |-- client                      # client
|   |   |-- Dockerfile              # client Dockerfile
|   |   |-- client.js               # client node app
|   |   `-- package.json            # client dependencies
|   `-- server                      # server
|       |-- Dockerfile              # server Dockerfile
|       `-- server.js               # server node app
`-- static                          # static files
    `-- demo-app-node-port.png
```

## Quick Start Scenario-1

1. `minikube start`
1. Add the result of the following command to your etc/hosts:
   echo "`minikube ip` demo-app.example.com"
1. `kubectl deploy ./Scenario-1/deployment.yaml`
1. `kubectl deploy ./Scenario-1/service.yaml`
1. `minikube addons enable ingress`
1. `kubectl deploy ./Scenario-1/ingress.yaml`
1. Open your browser http://demo-app.example.com


#### - Scenario #1

See [Scenario-1/README.md](../Scenario-1/README.md)

#### - Scenario #2
See [Scenario-2/README.md](../Scenario-2/README.md)


#### - Scenario #3
See [Scenario-3/README.md](../Scenario-3/README.md)

### First Steps / Getting Started

1. Install requirements
  - Install `minikube`
  - Install `kubectl`
1. Start minikube
  - `minikube start`
  - validate installation by running `minikube ip` which should return the ip address of the vm hosting minikube ...
  e.g: `192.168.99.100`

1. Check `kubectl` is working against `minikube`
  - kubectl cluster-info which should yield:
    ```
    kubectl cluster-info
    Kubernetes master is running at https://192.168.99.100:8443

    To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
    ```

Jump to the demo-app in `Scenario-1` to continue. [link](../Scenario-1/README.md)
