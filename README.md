# Coaching Center Management System

This project is an Angular application for managing a coaching center. It includes features such as user authentication, student management, and a responsive design using Angular Material.

## Features

- **Landing Page**: A welcoming page for users.
- **Login Page**: Allows users to log in to their accounts.
- **Registration Page**: Enables new users to create an account.
- **Dashboard Page**: Displays a list of students enrolled in the coaching center.
- **Student Details Page**: Shows detailed information about individual students.

## Technologies Used

- Angular (version 16.2.16)
- Angular Material for UI components
- TypeScript (version 5.7.3)
- Node.js (version v16.14.0)
- npm (version 8.19.4)

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd coaching-center-management
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Serve the application:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`.

## Usage Guidelines

- Ensure you have the required versions of Angular CLI, Node.js, and npm installed.
- Use dummy data for testing purposes.
- Follow the responsive design principles to ensure compatibility across devices.

## Project Structure

```
coaching-center-management
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── dashboard
│   │   │   ├── landing-page
│   │   │   ├── login
│   │   │   ├── registration
│   │   │   └── student-details
│   │   ├── services
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.component.css
│   │   └── app.module.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.