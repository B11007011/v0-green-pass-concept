import { NotFoundError } from '@/components/error-boundary'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | GreenPass',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return <NotFoundError />
} 