import {
    Component,
    PropsWithChildren,
    ReactNode,
} from 'react';
import {
    Route,
    Routes
} from 'react-router-dom';

import {
    NavBarComponent,
} from './components';
import {
    HomePage,
} from './pages';


export class App extends Component<PropsWithChildren> {
    public render(
    ): ReactNode {
        console.log(App.name, ': Rendering...');
        
        return (
            <>
                <NavBarComponent />
                
                <div className='container'>
                    <Routes>
                        <Route path="/" Component={ HomePage } />
                    </Routes>
                </div>
            </>
        );
    }
}