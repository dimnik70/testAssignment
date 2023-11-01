# Tree Explorer App

This Vue.js application allows users to explore a tree structure of folders and files. Users can edit the names of items and delete them within the tree. The state of the application is managed using Pinia.

## Project Structure

The initial structure of the tree is as follows:

- Dir 1
  - Dir 1-1
    - File 1-1-1
  - File 1-2
- Dir 2
  - Dir 2-1
  - File 2-2
- File 2

## Requirements

Docker
Docker Compose

## Getting Started

1. Clone the repository:

```sh
git clone https://github.com/dimnik70/testAssignment.git
cd tree-explorer-app
```

Remember to make sure you have Node.js and npm installed on your system before running the npm install and npm run build commands.

2. Install dependencies:

```sh
npm install
```

3. Build the project:

```sh
npm run build
```

4. Build and run the Docker containers:

```sh
docker-compose up --build
```

This command will download the necessary dependencies, build the Vue.js application, and start the development server.

5. Access the application in your browser:

```
http://localhost
```

## Technologies Used

- Vue.js
- Pinia
- Docker
