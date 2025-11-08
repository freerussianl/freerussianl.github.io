import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/settings/articles">Статьи</Link></li>
        <li><Link to="/settings">События</Link></li>
        <li><Link to="/settings/documents">Документы</Link></li>
        <li><Link to="/settings/users">Администраторы</Link></li>
      </ul>
    </aside>
  )
};


export default Aside;