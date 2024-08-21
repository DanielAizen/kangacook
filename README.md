# My Fullstack React and Django Project

This project is a fullstack application using React for the frontend and Django for the backend. It allows users to manage products and interact with a 3D visualization.

## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
  - [Backend (Django)](#backend-django)
  - [Frontend (React)](#frontend-react)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)

## Requirements

- Python 3.8 or higher
- Node.js 14.x or higher
- npm or Yarn

## Setup

### Backend (Django)

**Clone the Repository**:

   ```bash
   git clone https://github.com/DanielAizen/kangacook.git
   cd your-repo-name
   python -m venv env
   env\Scripts\activate
   pip install -r requirements.txt
   ```
   On macOS/Linux:
   ```bash
        python3 -m venv env
        source env/bin/activate
   ```

### Frontend (React)
 Navigate to the client Directory:

```bash
cd client
Install Frontend Dependencies:
```

Using npm:

```bash
npm install
```
Or using Yarn:

```bash
yarn install
```

**Backend**
Start the Django Development Server:

```bash
python manage.py runserver
```
The backend server will be available at http://127.0.0.1:8000/.

**Frontend**
Serve the React App Locally:

```bash
npm start
```


### Summary
- **README File**: The provided `README.md` template includes detailed instructions for setting up the project locally, making it easy for anyone to run the application on their own machine.
