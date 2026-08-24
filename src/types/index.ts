export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  category: string;
  image: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface FooterColumn {
  heading: string;
  links: string[];
}
