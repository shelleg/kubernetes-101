asciinema rec -t="Deploying demo-app"
clear
ll
minikube status

pushd scenario-1
clear
minikube ip

##############################
# Create demo-app deployment #
##############################
kubectl create -f deployment.yml
kubectl get pod

############################################
# only one pod of demo app ... let's scale #
############################################
kubectl scale --replicas=2 -f deployment.yml
kubectl get pod

##########################################
# Connect service to demo-app deployment #
##########################################
kubectl create -f service.yml
kubectl get svc

##################################################
# let's see what port the service listens on ... #
##################################################
kubectl get svc demo-app --export -o yaml

#################################################################################
# see how we are using NodePort "31623" and we can typically reach our app with #
# $(minikube ip):NodePort" so let's check our deployment with curl              #
#################################################################################
#
curl `minikube ip`:31623

##########################################################################################
# For ingress testing purposes we need someone to "tell" app.exmaple.com to your service #
# enabling nginx ingress controller so we can expose our service to the "outside world"  #
##########################################################################################
minikube addons list | grep enabled && sleep 2;c && minikube addons list | grep ingress
##################
# enable ingress #
##################
minikube addons enable ingress
kubectl create -f ingress.yml

#################################################################
# To map app.example.com to the service we need to hack and add #
# app.exmaple.com to our /etc/hosts file like so:               #
#################################################################
cat /etc/hosts | grep 'app.example.com' && echo "were all set" || (echo "`minikube ip` app.example.com" | sudo tee -a /etc/hosts)
192.168.99.100 app.example.com

################################
# check service from "outside" #
################################
curl http://app.example.com
popd
