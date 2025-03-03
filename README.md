# Domain Selling Landing Page

A React-based landing page for selling your domain with a contact form for lead collection. This project is designed to be easy to set up and deploy, making it perfect for beginners.

## Features
- **Modern UI** built with React & Chakra UI
- **Form submission support** for collecting inquiries
- **Dynamic domain display**
- **API support** for tracking and analytics
- **Easy deployment** with Vite

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [Vite](https://vitejs.dev/)

### Clone the Repository
```sh
git clone https://github.com/your-username/domain-landing.git
cd domain-landing
```

### Install Dependencies
```sh
npm install
```

### Configure Environment Variables
Create a `.env` file in the root directory and add the following variables:

```ini
VITE_API_KEY="your-api-key"
VITE_AUTH_DOMAIN="your-auth-domain"
VITE_PROJECT_ID="your-project-id"
VITE_STORAGE_BUCKET="your-storage-bucket"
VITE_MESSAGING_SENDER_ID="your-messaging-sender-id"
VITE_APP_ID="your-app-id"
VITE_MEASUREMENT_ID="your-measurement-id"
VITE_DATABASE_URL="your-database-url"
```
> ⚠️ **Important:** Never expose your `.env` file in public repositories. Use `.gitignore` to prevent it from being tracked.

### Run the Project
```sh
npm run dev
```
Your app will be running at `http://localhost:5173`

## Deployment

### Build and Deploy
```sh
npm run build
npm run deploy
```
This will generate a `dist/` folder and deploy the site automatically.

## Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License
This project is open-source and available under the [MIT License](LICENSE).

