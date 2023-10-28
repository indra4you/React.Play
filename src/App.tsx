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
    RenderCompPage,
    RenderFuncPage,
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
                        <Route index Component={ HomePage } />
                        <Route path="/home" Component={ HomePage } />

                        <Route path="/render">
                            <Route index Component={ RenderCompPage } />
                            <Route path="/render/component" Component={ RenderCompPage } />
                            <Route path="/render/function" Component={ RenderFuncPage } />
                        </Route>
                    </Routes>
                </div>
            </>
        );
    }
}