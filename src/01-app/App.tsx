import React, { Suspense } from 'react';
import {Router} from './providers/router';

function App() {
    return (
        <div className="App">
            <Suspense fallback={'Loading...'}>
                <Router />
            </Suspense>
            {/*<FormattedText text={text}/>*/}
            {/*{parseString('текст\n```\nconst x = 4;\n```\nещё текст')}*/}
            {/*{parseString('текст \nconst x = 4;\n```\nещё текст')}*/}
            {/*{parseString('текст \n```\nconst x = 4;\n```\nещё текст \n```\nconst y = 8;\n``` конец')}*/}
            {/*{parseString('текст \n```\nconst x = 4;\n```\nещё текст \n```\nconst y = 8;\n``` конец')}*/}
            {/*{parseString('***Lorem*** Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +*/}
            {/*    '```\nbody {\n    color:\'red\';\n}```\n A, ad amet aperiam beatae [link](\'https://www.google.com/\')' +*/}
            {/*    '\n deleniti doloribus enim eum fuga hic id illo, ' +*/}
            {/*    '\n iusto laudantium maxime, modi nobis quibusdam sunt suscipit tempora! \n```\nconst y = 8;\n``` ' +*/}
            {/*    '***Dolor sit*** \n Lorem ipsum dolor sit amet, consectetur adipisicing \n' +*/}
            {/*    'elit [link2](\'https://www.google.com/\'). ')}*/}
            {/*{parseString('***Lorem** \n Lore```m ipsum dolor sit`` amet, ```[li2]()```````231 ***consectetur adipisicing \n' +*/}
            {/*    'elit [li2(\'https://www.google.com/\'). ')}*/}
            {/*<FormattedText text={text}/>*/}
        </div>
    );
}

export default App;
