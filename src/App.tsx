import Chat from './components/Chat'
import Layout from './components/Layout'
import MainContent from './components/MainContent'
import MenuLeft from './components/MenuLeft'
import MenuLeftItem from './components/MenuLeft/MenuLeftItem'
import MenuRight from './components/MenuRight'
import Post from './components/CardPost'
import Store from './components/Stories'
import StoreItem from './components/Stories/StoreItem'
import './styles/global.css'
import PostWriter from './components/PostWrite'


function App() {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <Layout>
      <>
        {/* MENU LATERAL ESQUERDO */}
        <MenuLeft>
          <MenuLeftItem title='edson lima' imgUrl='/images/perfil.jpg' style='col-span-full' />
          <MenuLeftItem title='Amigos' imgUrl='/images/amigo.png' />
          <MenuLeftItem title='Doação' imgUrl='/images/doacao.png' />
          <MenuLeftItem title='Jogos' imgUrl='/images/jogo.png' />
          <MenuLeftItem title='Marketplace' imgUrl='/images/marketplace.png' />
          <MenuLeftItem title='Messenger' imgUrl='/images/messenger.png' />
          <MenuLeftItem title='Página' imgUrl='/images/pagina.png' />
          <MenuLeftItem title='Pagamentos' imgUrl='/images/payment.png' />
          <MenuLeftItem title='Salvos' imgUrl='/images/video.png' />
        </MenuLeft>

        {/* MENU LATERAL DIREITO */}
        <MenuRight>
          {arr.map(_ => (
            <Chat title='Edson lima' imgUrl='/images/perfil.jpg' />
          ))}
         
        </MenuRight>

        {/* CONTEUDO DO CENTRO */}
        <MainContent>

          <Store>
            <StoreItem title="edson lima" imageUrl='/images/perfil.jpg' imagePerfil="/images/perfil.jpg" />
            <StoreItem title="edson lima" imageUrl='/images/perfil.jpg' imagePerfil="/images/perfil.jpg" />
            <StoreItem title="edson lima" imageUrl='/images/perfil.jpg' imagePerfil="/images/perfil.jpg" />
            <StoreItem title="edson lima" imageUrl='/images/perfil.jpg' imagePerfil="/images/perfil.jpg" />
          </Store>

          <PostWriter />

          <Post />
          <Post />

        </MainContent>

      </>
    </Layout>
  )
}

export default App
