"use client"
import type { BoardDTO } from '@/api';
import useBoardCard from '@/components/containers/BoardCard/useBoardCard';
import StarInput from '@/components/pieces/StarInput';

import styles from "./index.module.css";

type Props = {
  board: BoardDTO
}
const BoardCard = ({
  board
}: Props) => {
  const {
    recentActivity,
    updateFavourite,
    isFavourite
  } = useBoardCard(board)
  return (
    <div className={styles.BoardCard}>
      <div className={styles["card-header"]}>
        <h2 className={styles["board-name"]}>
          {board.name}
        </h2>
        <StarInput
          size="sm"
          checked={isFavourite}
          onChange={updateFavourite}
        />
      </div>
      <p className={styles["board-description"]}>
        {recentActivity}
      </p>
    </div>
  )
}

export default BoardCard;
