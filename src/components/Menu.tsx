import '../css/Menu.css';
import type { ReactElement } from "react";
import type { IPage } from "../IPage";

interface MenuProps {
  pages: IPage[];
}

export const Menu = (props: MenuProps): ReactElement => {
    const { pages } = props;

    return (
        <header>
          <nav>
            {pages.map((page) => (
                <a key={page.id} href={`#${page.id}`}>{page.title}</a>
            ))}
          </nav>
      </header>
    );
}