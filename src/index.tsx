import {
    createRoot,
    Root,
} from 'react-dom/client';
import {
    StrictMode,
} from 'react';
import {
    BrowserRouter
} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import {
    App,
} from './App';


const rootHtmlElement: HTMLElement | null = document.getElementById('root');
if (null == rootHtmlElement) {
    alert('"root" element NOT found in "index.html"!');
} else {
    const reactRootDom: Root = createRoot(rootHtmlElement);

    console.log('index : Rendering...');

    reactRootDom.render(
        <StrictMode>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </StrictMode>
    );
}