import '../css/Page.css';
import type { ReactElement } from "react";
import type { IPage } from "../IPage";

interface PageProps {
  page: IPage;
}

export const Page = (props: PageProps): ReactElement => {
    const { page } = props;

    return (
        <article id={page.id} className="page" style={{ backgroundImage: `url(${page.image})` }}>
            <h1>{page.title}</h1>

            {page.info.map((info, index) => (
                <section key={index} className="info">{info}</section>
            ))}

            <section className="menu">
                <ul>
                    {page.menuItems.map((item, index) => (
                        <li key={index}>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}