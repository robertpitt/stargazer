FROM ubuntu
MAINTAINER Robert Pitt

# Setup
ENV DEBIAN_FRONTEND noninteractive

# Install Node
RUN sudo apt-get update
RUN sudo apt-get -y install wget curl

# Install NVM
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.24.1/install.sh | bash

# Install the latest stable
RUN cat ~/.nvm/nvm.sh >> installnode.sh
RUN echo "nvm install stable && nvm alias default stable" >> installnode.sh
RUN sh installnode.sh
RUN rm installnode.sh

# Install meteor
RUN curl https://install.meteor.com/ | sh

# Add the install script
ADD ./Dockerinstall /tmp/Dockerinstall
RUN chmod +x /tmp/Dockerinstall

# Run app
CMD ["/bin/bash", "/tmp/Dockerinstall"]