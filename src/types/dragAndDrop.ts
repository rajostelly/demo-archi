import type { CardDTO } from '@/api';

export interface DragAndDropCardProps {
  card: CardDTO;
  index: number;
  onCardClick?: (card: CardDTO) => void;
}

export interface DroppableContainerProps {
  listId: string;
  cards: Array<CardDTO>;
  onCardClick?: (card: CardDTO) => void;
  className?: string;
}

export interface DragEndResult {
  cardId: string;
  sourceListId: string;
  destinationListId: string;
  sourceIndex: number;
  destinationIndex: number;
}
