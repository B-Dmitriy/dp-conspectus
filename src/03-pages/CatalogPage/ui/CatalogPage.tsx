import { Catalog } from '06-entities/Catalog';
import classes from './CatalogPage.module.scss';

const CatalogPage = () => (
    <div className={classes.CatalogPage}>
        <Catalog />
    </div>
);

export default CatalogPage;
