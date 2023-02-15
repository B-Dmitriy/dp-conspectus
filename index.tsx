import React from 'react';
import './App.css';

function App() {
    const parseText = (text: string): JSX.Element => {
        let result: JSX.Element[] = [];

        const parseString = (str: string): undefined => {
            if (str.length > 0) {
                const firstEntry: number = str.indexOf('```');
                if (firstEntry >= 0) {
                    const substringBeforeFirstEnter = str.substring(0, firstEntry);
                    const substringAfterFirstEnter = str.substring(firstEntry + 3);

                    const secondEntry: number = substringAfterFirstEnter.indexOf('```');
                    if (secondEntry >= 0) {
                        const secondEntry: number = substringAfterFirstEnter.indexOf('```');
                        const codeString = substringAfterFirstEnter.substring(0, secondEntry);
                        const substringAfterCode = str.substring(firstEntry + secondEntry + 6);
                        result.push(<pre>{substringBeforeFirstEnter}</pre>)
                        result.push(<pre style={{backgroundColor: 'black', color: "white"}}>{codeString}</pre>)
                        return parseString(substringAfterCode);
                    }
                    result.push(<pre>{str}</pre>)
                    return;
                }
                result.push(<pre>{str}</pre>)
                return;
            } else {
                return;
            }
        }

        parseString(text);

        return <div style={{width: '200px', textAlign: 'start'}}>{result.map((item) => item)}</div>;
    }


    return (
        <div className="App">
            {/*{parseText('текст\n```\nconst x = 4;\n```\nещё текст')}*/}
            {/*{parseText('текст \nconst x = 4;\n```\nещё текст')}*/}
            {parseText('текст \n```\nconst x = 4;\n```\nещё текст \n```\nconst y = 8;\n``` конец')}
        </div>
    );
}

export default App;
