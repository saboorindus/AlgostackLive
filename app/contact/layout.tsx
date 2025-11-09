import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Algostack | Get in Touch with Our Team',
  description: 'Contact Algostack for software development inquiries. Our expert team is ready to discuss your project needs and provide innovative solutions.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
