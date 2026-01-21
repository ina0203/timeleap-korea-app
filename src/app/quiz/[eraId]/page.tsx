
import { ERAS_ORDERED } from '@/data/eras';
import QuizClient from './QuizClient';
import { EraId } from '@/types/era';

// Generate static params for each era to support static export
export function generateStaticParams() {
  return ERAS_ORDERED.map((eraId) => ({
    eraId: eraId,
  }));
}

export default function QuizPage({ params }: { params: { eraId: EraId } }) {
  return <QuizClient params={params} />;
}
