export interface IPage {
  id: string;
  title: string;
  info: string[];
  image: string;
  menuItems: Array<{
    name: string;
    price: string;
  }>;
}
