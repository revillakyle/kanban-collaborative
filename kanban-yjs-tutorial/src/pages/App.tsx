import type { FC } from "react";
import styles from "../styles/App.module.css"
import { TaskColumn } from "../components/TaskColumn";
import { useSyncToYjsEffect } from "../yjs/useSyncToYjsEffect";
import { DndProvider } from "../dnd/DndProvider";


const App: FC = () => {
  useSyncToYjsEffect()
  return(
    <DndProvider>
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Projects / Board</h1>
      <div className={styles.grid}>
        <TaskColumn status="To Do"/>
        <TaskColumn status="In Progress"/>
        <TaskColumn status="Done"/>
      </div>
    </div>
    </DndProvider>

  )
}

export default App;