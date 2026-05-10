import { WordEntry } from './types';

export interface Editorial {
  id: string;
  title: string;
  content: string;
  date: string;
  source: string;
  keyVocabulary: string[];
}

export const EDITORIAL_DATA: Editorial[] = [
  {
    id: 'ed-1',
    title: 'The imperative of educational reform in a digital age',
    content: `In an era defined by rapid technological advancement, the traditional paradigms of education are being challenged like never before. The transition to a digital-first society necessitates a fundamental reimagining of how we impart knowledge and develop critical thinking skills. It is no longer sufficient for students to merely memorize facts; they must become adept at navigating vast oceans of information, discerning truth from misinformation, and applying their knowledge to complex, real-world problems.

The digital divide, however, threatens to exacerbate existing social inequalities. While some students have unfettered access to high-speed internet and cutting-edge devices, others are left in the digital wilderness. Bridging this gap is not just a matter of infrastructure; it requires a concerted effort from policymakers, educators, and the private sector to ensure that every learner has the tools and the support they need to succeed in the 21st-century economy.

Furthermore, the role of the teacher is evolving. Rather than being the sole source of knowledge, educators are now facilitators of learning, guiding students as they explore and discover. This shift requires significant investment in teacher training and professional development, empowering them to leverage technology effectively in the classroom while maintaining the human connection that is so vital to student success.`,
    date: 'May 1, 2024',
    source: 'The Daily Star',
    keyVocabulary: ['Paradigm', 'Misinformation', 'Exacerbate', 'Unfettered', 'Facilitator']
  },
  {
    id: 'ed-2',
    title: 'Sustainable urban planning: A necessity for future generations',
    content: `As the global population continues to urbanize at an unprecedented rate, the need for sustainable urban planning has become an existential priority. Our cities are the engines of economic growth, but they are also major contributors to environmental degradation and social dislocation. To ensure a livable future, we must redesign our urban environments to prioritize sustainability, inclusivity, and resilience.

One of the most pressing challenges is the reduction of carbon emissions. Transitioning to renewable energy sources, expanding public transit systems, and promoting non-motorized transport are essential steps toward creating greener cities. Additionally, the preservation of green spaces and the implementation of nature-based solutions can help mitigate the effects of climate change, such as urban heat islands and flash flooding.

Social equity must also be at the heart of urban planning. Affordable housing, accessible healthcare, and equitable access to quality education and recreation are essential for fostering vibrant and resilient communities. By prioritizing the needs of all residents, particularly the most vulnerable, we can create cities that are not only sustainable but also just and inclusive for everyone.`,
    date: 'April 15, 2024',
    source: 'The Daily Star',
    keyVocabulary: ['Unprecedented', 'Degradation', 'Mitigate', 'Resilient', 'Equitable']
  }
];
