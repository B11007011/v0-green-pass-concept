# GreenPass - Sustainable Mobility App

GreenPass is a web application that helps users track their green mobility activities, earn rewards, and reduce their carbon footprint. The app is built with Next.js, TypeScript, and Tailwind CSS, providing a fast, responsive, and beautiful user experience.

## Features

- **Dashboard**: Track your green credits, CO2 savings, and connected accounts
- **Transport Tracking**: Monitor your transportation methods and their environmental impact
- **Rewards System**: Earn green credits for sustainable mobility choices and redeem them for rewards
- **Impact Visualization**: See your carbon savings over time with interactive charts
- **Connected Accounts**: Link your public transport cards, bike-sharing accounts, and more
- **Responsive Design**: Works on all devices, from mobile to desktop

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **State Management**: React hooks
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://github.com/colinhacks/zod)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- pnpm or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/green-pass.git
   cd green-pass
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
pnpm build
pnpm start
# or
npm run build
npm start
```

## Project Structure

```
green-pass/
├── app/                 # Next.js app directory
│   ├── admin/           # Admin panel pages
│   ├── api/             # API routes
│   └── ...              # Other pages
├── components/          # React components
│   ├── ui/              # UI components
│   └── ...              # Feature components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## Deployment

This application is deployed on [Vercel](https://vercel.com/b11007011s-projects/v0-green-pass-concept-gw).

Originally built with [v0.dev](https://v0.dev/chat/projects/HGhyXzvSDov), the project has been optimized and enhanced for production.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Recharts](https://recharts.org/)
- [v0.dev](https://v0.dev/)