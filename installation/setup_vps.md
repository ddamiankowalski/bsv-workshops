# Setup Instructions

This guide provides step-by-step instructions to set up the required tools: a firewall, Git, Docker, and Docker Compose. Finally, it shows how to run the `./start.sh` script from the `spv-wallet` directory.

---

## 1. Update System Packages

First, ensure your system packages are up-to-date:
```bash
sudo apt-get update
```

---

## 2. Configure Firewall

Set up the Uncomplicated Firewall (`ufw`) to secure your server:
```bash
sudo apt-get install ufw -y # Install the firewall if not already installed
sudo ufw default deny incoming    # Deny all incoming connections by default
sudo ufw default allow outgoing   # Allow all outgoing connections
sudo ufw allow 22/tcp             # Allow SSH
sudo ufw allow 80/tcp             # Allow HTTP
sudo ufw allow 443/tcp            # Allow HTTPS
sudo ufw enable                   # Enable the firewall
sudo ufw status                   # Check the firewall status
```

---

## 3. Install Git

Install Git to manage source code repositories:
```bash
sudo apt install git-all -y
git --version                    # Verify the installation
```

---

## 4. Install Docker

Follow these steps to install Docker:

1. Install necessary prerequisites:
    ```bash
    sudo apt-get install ca-certificates curl -y
    ```

2. Add Docker's official GPG key:
    ```bash
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc
    ```

3. Set up the Docker repository:
    ```bash
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```

4. Update system packages:
    ```bash
    sudo apt-get update
    ```

5. Install Docker packages:
    ```bash
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
    ```

6. Verify Docker installation:
    ```bash
    sudo docker run hello-world
    ```

---

## 5. Install Docker Compose

Docker Compose comes as a plugin in the latest Docker versions. Ensure it’s installed:
```bash
sudo apt-get install docker-compose-plugin -y
docker compose version           # Verify the installation
```

---

## 6. Add Docker to Non-Root Users

Allow your user to execute Docker commands without `sudo`:
```bash
sudo groupadd docker               # Create the docker group if it doesn't exist
sudo usermod -aG docker $USER      # Add your user to the docker group
```

Log out and back in for the group changes to take effect.

---

## 7. Run `./start.sh` from `spv-wallet`

Navigate to the `spv-wallet` directory and execute the `start.sh` script:
```bash
cd spv-wallet/
./start.sh
