# Homework13
# Express API with LocalStorage Simulation

## Project Overview
This project implements a basic **Express API** that mimics the functionality of `localStorage` for storing and retrieving data between requests. The data is stored persistently using a file-based approach, simulating the behavior of `localStorage` in a server-side environment.

## Steps Taken

### 1. **Project Initialization**
   - Created a new project folder and initialized it using `npm init -y`.
   - Installed **Express** via `npm install express`.

### 2. **Setting Up the Express Server**
   - Created a `server.js` file to set up a basic Express server.
   - The server listens on port 3000 and handles the incoming requests on defined routes.

### 3. **Creating Express Routes**
   - **GET `/retrieve/:key`**: 
     - Accepts a key as a URL parameter.
     - Retrieves the corresponding value from the file-based storage.
     - Returns the value if found, or a `404` error if the key doesn't exist.
   - **POST `/store`**: 
     - Accepts a JSON body with a `key` and `value`.
     - Stores the data in a file (`localStorage.json`) to persist across server restarts.
     - Returns a confirmation message or a `400` error if the request is invalid.

### 4. **Implementing File-Based Storage**
   - Data is stored in a file named `localStorage.json` using the Node.js `fs` module.
   - Created helper functions to read from and write to the storage file:
     - **`readStorage()`**: Reads and parses the `localStorage.json` file.
     - **`writeStorage()`**: Writes updated data back to the `localStorage.json` file.

### 5. **Testing the Server**
   - Tested the functionality using **Postman**:
     - **POST** route to store key-value pairs in the `localStorage.json` file.
     - **GET** route to retrieve stored data based on the key.

### 6. **Documenting the Code**
   - Added comments throughout the `server.js` file to explain the logic behind each route, file operations, and validation steps.

## Challenges Faced

### 1. **Understanding File Storage in Node.js**
   - Initially unfamiliar with file-based persistence in a Node.js environment.
   - Researched how to store and retrieve data from a file using the `fs` module in Node.js.

### 2. **Data Persistence Across Requests**
   - Realized that browser `localStorage` is not available on the server-side.
   - Opted for a file-based solution, which mimics the behavior of `localStorage` by using a JSON file to store data.

### 3. **Error Handling and Validation**
   - Implemented proper error handling to ensure the server responds correctly when data is missing or a key is not found.
   - Added checks for empty request data and non-existing keys.

## Conclusion
This project demonstrated how to set up an Express API, implement persistent storage, and simulate `localStorage` on the server side using file-based storage. The solution is simple and effective for small-scale applications. For more complex projects, a database or caching mechanism like Redis would be more appropriate.

## Deliverables

1. **`server.js`**: Contains the Express server setup, routes for storing and retrieving data.
2. **`localStorage.json`**: The storage file used to persist data between requests.
3. **`package.json`**: Contains project metadata and dependencies.

## Installation Instructions

1. Clone the repository to your local machine.
2. Navigate to the project folder and install the dependencies:
   ```bash
   npm install
