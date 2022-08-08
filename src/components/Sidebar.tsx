import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/jhomc.png" />

        <strong>Jhonata Costa</strong>
        <span>Developer</span>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}