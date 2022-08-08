import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jhomc.png',
      name: 'Jhonata Martins da Costa',
      role: 'Front-end Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jhomc.png',
      name: 'Diego Fernandes',
      role: 'CTO'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-08-01 20:00:00'),
  },
]

function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return(
            <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}

      </main>
    </div>
    </>
  )
}

export default App
