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
            <StoreItem title="edson lima" imageUrl='/images/dev.jpg' imagePerfil="/images/perfil.jpg" />
            <StoreItem title="Sthefany" imageUrl='/images/modelo1.jpg' imagePerfil="/images/modelo1.jpg" />
            <StoreItem title="Pedro carlos" imageUrl='/images//modelo2.jpg' imagePerfil="/images/modelo2.jpg" />
            <StoreItem title="Alice santana" imageUrl='/images//modelo3.jpg' imagePerfil="/images/modelo3.jpg" />
          </Store>

          <PostWriter />

          <Post name='edson lima'
            hour='10'
            description='Clonando o facebook com reactJs'
            imgProfile='/images/perfil.jpg'
            imgUrl='/images/dev.jpg'
            likeName="você"
            likeTotal="250"
            likeImg="/images/curtir.svg"/>

          <Post name='Sthefany'
            hour='15'
            description='Dia de fotos em paris'
            imgProfile='/images/modelo1.jpg'
            imgUrl='/images/modelo1.jpg'
            likeName="joão carlos"
            likeTotal="1.553"
            likeImg="/images/curtir.svg" />

          <Post name='Pedro carlos'
            hour='25'
            imgProfile='/images/modelo2.jpg'
            imgUrl='/images/modelo2.jpg'
            likeName="Atenes"
            likeTotal="225"
            likeImg="/images/curtir.svg" />

          <Post name='Alice santana'
            hour='5'
            description='Comemorando mais uma data especial'
            imgProfile='/images/modelo3.jpg'
            imgUrl='/images/modelo3.jpg'
            likeName="Silva"
            likeTotal="125"
            likeImg="/images/curtir.svg" />

        </MainContent>

      </>
    </Layout>
  )
}

export default App
