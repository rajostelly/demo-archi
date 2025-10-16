import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

import type { BoardDTO } from '@/api';
import useFnsLocale from '@/hooks/useFnsLocale';
import { useTypedTranslations } from '@/hooks/useTypedTranslations';

const useBoardCard = (
  board: BoardDTO
) => {
  const locale = useFnsLocale()
  const t = useTypedTranslations("board.card")

  const [isFavourite, setIsFavourite] = useState(false)

  const updateFavourite = (fav: boolean) => {
    setIsFavourite(fav);
  }

  const recentActivity = t("recent-activity", {
    time: board.updatedAt ?
      formatDistanceToNow(new Date(board.updatedAt), { locale, addSuffix: true }) : " - "
  })
  return {
    recentActivity,
    isFavourite,
    updateFavourite
  }
}

export default useBoardCard;
