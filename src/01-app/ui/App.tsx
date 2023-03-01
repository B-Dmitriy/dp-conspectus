import React from 'react';

function App() {
    const text = '***Lorem*** Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
        '```\nbody {\n    color:\'red\';\n}```\n A, ad amet aperiam beatae [link](\'https://www.google.com/\')' +
        '\n deleniti doloribus enim eum fuga hic id illo, ' +
        '\n iusto laudantium maxime, modi nobis quibusdam sunt suscipit tempora! \n```\nconst y = 8;\n``` ' +
        '***Dolor sit*** \n Lorem ipsum dolor sit amet, consectetur adipisicing \n' +
        'elit [link2](\'https://www.google.com/\'). '


    return (
        <div className="App">
            WORK
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
            {/*<table style={{ width: '100%', borderSpacing: 0}}>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th style={{width: '300px',resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>The table body</th>*/}
            {/*        <th style={{width: '300px',resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>THIS</th>*/}
            {/*        <th style={{width: 'auto',resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>with two columns</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    <tr>*/}
            {/*        <td style={{width: '300px',resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>111111111</td>*/}
            {/*        <td style={{width: '300px',resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>222222222</td>*/}
            {/*        <td style={{width: 'auto',resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>3333333</td>*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        <td style={{width: '300px',resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>44444444</td>*/}
            {/*        <td style={{width: '300px',resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>55555555</td>*/}
            {/*        <td style={{width: 'auto',resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>6666666666</td>*/}
            {/*    </tr>*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            {/*<div style={{display: 'flex', }}>*/}
            {/*    <div style={{width: '33%', height: '200px', margin: 0, padding: 0, resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>*/}
            {/*        Div*/}
            {/*    </div>*/}
            {/*    <div style={{width: '33%', height: '200px', margin: 0, padding: 0, resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>*/}
            {/*        Div*/}
            {/*    </div>*/}
            {/*    <div style={{width: '33%', height: '200px', margin: 0, padding: 0, resize: 'horizontal', border: '1px solid black', overflow: 'auto'}}>*/}
            {/*        Div*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}


export default App;
