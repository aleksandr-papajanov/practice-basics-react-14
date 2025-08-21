import '../css/App.css'
import type { IPage } from '../IPage';
import { Menu } from './Menu'
import { Page } from './Page';

interface AppProps {
  pages: IPage[];
}

function App(props: AppProps) {
  const { pages } = props;

  return (
    <>
      <Menu pages={pages} />

      <main>
        {pages.map((page) => (
          <Page key={page.id} page={page} />
        ))}
      </main>
    </>
  )
}

export default App
