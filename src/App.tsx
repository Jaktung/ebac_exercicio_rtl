import Post from "./components/Post"

import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://via.placeholder.com/200x200">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  )
}

export default App
