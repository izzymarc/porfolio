<<<<<<< HEAD
# Portfolio Website

A modern, full-stack portfolio website built with React, Express, and TypeScript.

## Features

- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 🔒 Secure API endpoints with rate limiting and CORS
- 📝 Contact form with email notifications
- 📱 Responsive design
- 🌙 Dark mode support
- 🚀 Fast development with Vite
- 📊 Real-time analytics
- 🔍 SEO optimized

## Tech Stack

- **Frontend**:
  - React 18
  - TypeScript
  - Tailwind CSS
  - shadcn/ui
  - React Query
  - Wouter (routing)
  - Framer Motion

- **Backend**:
  - Express.js
  - TypeScript
  - PostgreSQL (with Drizzle ORM)
  - Winston (logging)
  - Zod (validation)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration.

4. Set up the database:
   ```bash
   npm run db:push
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

### Production Build

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utility functions
│   │   └── assets/       # Static assets
├── server/                # Backend Express application
│   ├── lib/              # Utility functions
│   └── routes/           # API routes
├── shared/               # Shared code between client and server
└── public/               # Static files
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin only)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [Vite](https://vitejs.dev/) for the build tool
=======
# Ezekiel Gwamna - Portfolio Website

A modern, responsive portfolio website for Ezekiel Funom Gwamna, a Full Stack Software Engineer.

## Technologies Used

- **Frontend**: React, TypeScript, TailwindCSS, Shadcn UI
- **Backend**: Express.js (for development)
- **Contact Form**: EmailJS
- **Hosting**: Cloudflare Pages

## Features

- Responsive design that works on all device sizes
- Modern UI with smooth animations
- Contact form that sends emails directly from the client
- Light/dark mode toggle
- SEO optimized
- Fast loading times

## Deployment Instructions for Cloudflare Pages

### Prerequisites

- A Cloudflare account
- An EmailJS account for the contact form

### Step 1: Setup EmailJS for Contact Form

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service (e.g., Gmail, Outlook)
3. Create an email template with the following variables:
   - `{{name}}` - The sender's name
   - `{{email}}` - The sender's email
   - `{{subject}}` - The email subject
   - `{{message}}` - The message content
4. Note the following IDs which you'll need for environment variables:
   - Service ID
   - Template ID
   - Public Key

### Step 2: Deploy to Cloudflare Pages

1. Push your code to a GitHub repository
2. Log in to your Cloudflare dashboard
3. Go to Pages > Create a project > Connect to Git
4. Select your repository
5. Configure the build settings:
   - **Project name**: Choose a name (e.g., "ezekiel-portfolio")
   - **Production branch**: `main` (or your default branch)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/public`
   - **Environment variables**: Add the following:
     - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
     - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
     - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
6. Click "Save and Deploy"

### Step 3: Set Up Custom Domain (Optional)

1. In your Cloudflare Pages project, go to "Custom domains"
2. Click "Set up a custom domain"
3. Follow the instructions to add your domain

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at http://localhost:5000

## License

MIT
>>>>>>> 3671d6b599dbeb44e028b12d981af294df181259
