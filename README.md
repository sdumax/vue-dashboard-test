# Vue.js Dashboard Frontend Test

## Description of Solution:

This repository contains a Vue.js application implementing a sample dashboard based on the provided Figma design. The focus was on delivering a functional and interactive prototype, prioritizing core functionality and user experience over pixel-perfect visuals.

### Planning and Execution:

#### Project Setup:

- Initiated a Vue.js project with preferred version and TypeScript support.
- Installed required dependencies including Vuex and Vue Router.

#### Component Breakdown:

- Analyzed the Figma design to identify individual UI components.
- Created separate Vue components for each identified element.

#### Navigation:

- Set up Vue Router to enable navigation between different sections of the dashboard using the provided sidebar design.

#### Interactivity:

- Implemented hover effects and click actions for various UI elements, even if not explicitly shown in the Figma design.
- Ensured smooth transitions between pages.

#### Styling:

- Used SCSS for modular and maintainable styles.
- Prioritized semantic HTML and accessible color contrast.
- Used CSS variables to enhance customization and flexibility

#### Version Control (Git):

- Used Git for version control throughout the development process.
- Committed changes frequently with descriptive commit messages to track project history and facilitate collaboration.
- Followed a consistent commit message format (e.g., 50/72 rule) for clarity and organization.

## Setup Instructions:

### Prerequisites:

- Node.js and npm (or yarn) installed on your system.

### Clone Repository:

```bash
git clone https://github.com/sdumax/vue-dashboard-test.git
```

### Install Dependencies:

```Bash
cd vue-dashboard-test
npm install (or yarn install)
```

### Run Development Server:

```Bash
npm run serve (or yarn serve)
```

This will start the application at http://localhost:8080 (default port).

## Areas for Improvement:

- **Data Fetching**: While mock data was used for development, the application can be extended to integrate with real-time data sources using APIs.
- **Advanced UI Features**: Implement additional functionalities and interactions based on specific user workflows.
- Testing: Add unit and integration tests to ensure code quality and maintainability.
- Pixel-Perfect Design: Further refine styling adjustments to fully replicate the Figma design if complete visual fidelity is desired.
