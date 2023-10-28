import { useState } from 'react';

import {
    MessageComponent,
    MessageWithButtonComponent,
    ChildMessageComponent,
    ChildH4Component,
} from './components';

export type RenderFuncPageState = {
    message: string;
    counter: number;
}

export const RenderFuncPage = (
): JSX.Element => {
    const [ state, setState ] = useState<RenderFuncPageState>({
        message: 'State Message',
        counter: 0
    });

    function onUpdateMessageClicked(
    ): void {
        setState({
            counter: state.counter + 1,
            message: `Updated Message - ( ${ state.counter + 1 } times )`,
        });

        console.log(RenderFuncPage.name, ': State Changed...');
    }
    
    console.log(RenderFuncPage.name, ': Rendering...');

    return (
        <>
            <h1 className='mt-3'>Render with Function</h1>

            <div className='alert alert-info' role='alert'>
                Open browser <span className='fw-bold'>Console</span> to see Render details
            </div>

            <div>
                <h4 className='py-3'>State updated by Page</h4>

                <MessageComponent message='Fixed Message'></MessageComponent>
                <MessageComponent message={ state.message ?? 'Yet to Set' }></MessageComponent>

                <button onClick={ onUpdateMessageClicked } className='btn btn-primary'>Update Message</button>

                <p className='mt-3 fs-6 fst-italic'>
                    Expected Behaviour&nbsp;:&nbsp;
                    <span className='fw-light'>To render/re-render page and all the components on the page</span>
                </p>
            </div>

            <hr />
            
            <MessageWithButtonComponent></MessageWithButtonComponent>

            <hr />

            <ChildMessageComponent>
                <ChildH4Component />
            </ChildMessageComponent>
        </>
    );
};

export default RenderFuncPage;