import Chat from './components/Chat'
import Layout from './components/Layout'
import MenuLeft from './components/MenuLeft'
import MenuLeftItem from './components/MenuLeft/MenuLeftItem'
import MenuRight from './components/MenuRight'
import Post from './components/Posts'
import PostItem from './components/Posts/PostItem'
import './styles/global.css'


function App() {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <Layout>
      <>
        <MenuLeft>
          <MenuLeftItem title='edson lima' imgUrl='/images/perfil.jpg' />
          <MenuLeftItem title='Amigos' imgUrl='/images/amigo.png' />
          <MenuLeftItem title='Doação' imgUrl='/images/doacao.png' />
          <MenuLeftItem title='Jogos' imgUrl='/images/jogo.png' />
          <MenuLeftItem title='Marketplace' imgUrl='/images/marketplace.png' />
          <MenuLeftItem title='Messenger' imgUrl='/images/messenger.png' />
          <MenuLeftItem title='Página' imgUrl='/images/pagina.png' />
          <MenuLeftItem title='Pagamentos' imgUrl='/images/payment.png' />
          <MenuLeftItem title='Salvos' imgUrl='/images/video.png' />
        </MenuLeft>

        <MenuRight>
          {arr.map(_ => (
            <Chat title='Edson lima' imgUrl='/images/perfil.jpg' />
          ))}
          {/* <Chat title='Edson lima' imgUrl='/images/perfil.jpg' />
          <Chat title='Edson lima' imgUrl='/images/perfil.jpg' /> */}

        </MenuRight>

        <Post>
          <PostItem />
          <PostItem />
        </Post>

      </>
    </Layout>
  )
}

export default App
