import { classNames } from '07-shared/lib/classNames/classNames';
import booksSrc from '07-shared/assets/images/books.jpg';
import { Code } from '07-shared/ui/Code/Code';
import classes from './Catalog.module.scss';

interface CatalogPageProps {
    className?: string;
}

export function Catalog({ className }: CatalogPageProps) {
    return (
        <div className={classNames(classes.CatalogPage, {}, [className])}>
            <img src={booksSrc} width={600} height={300} alt="books" />
            <p>CatalogPage</p>
            <Code content={"class MyPlugin{\n  apply(compiler) {\n   compiler.hooks.run.tap('MyPlugin', (compilation) => ...\n"} />
        </div>
    );
}
