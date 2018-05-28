kubernetes demo-app
===================

The following repo was designed to demonstrate kubernetes functionality.
Starting from `minikube` and scaling into a "full-blown" cluster, follow the `Scenario-#` dirs and their corresponding `README.md` files.

Scenarios:
==========
1. demo-app show native pod load balancing
2. ping pong client and server external service calling an internal services
3. ping pong client and server external services which communicate with one another from the external service


Quick Start Scenario-1
======================

1. `minikube start`
1. Add the result of the following command to your etc/hosts:
   echo "`minikube ip` demo-app.example.com"
1. `kubectl deploy ./Scenario-1/deployment.yaml`
1. `kubectl deploy ./Scenario-1/service.yaml`
1. `minikube addons enable ingress`
1. `kubectl deploy ./Scenario-1/ingress.yaml`
1. Open your browser http://demo-app.example.com



Scenario #1
===========

See [Scenario-1/README.md](../Scenario-1/README.md)

Scenario #2
===========



Scenario #3
===========

Step By Step
============

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
1. Deploy a sample application `shelleg/demo-nodejs-http-server` [ I recommend running it once in docker just to see it's result ]
  -

