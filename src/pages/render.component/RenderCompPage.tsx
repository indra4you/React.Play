import {
    Component,
    ReactNode
} from 'react';

import {
    MessageComponent,
    MessageWithButtonComponent,
    ChildMessageComponent,
    ChildH4Component,
} from './components';

export type RenderCompPageProps = {
}

export type RenderCompPageState = {
    message: string;
    counter: number;
}

export class RenderCompPage extends Component<RenderCompPageProps, RenderCompPageState> {
    constructor(
        props: RenderCompPageProps,
    ) {
        super(props);

        this.state = {
            message: 'State Message',
            counter: 0,
        };

        this.onUpdateMessageClicked = this.onUpdateMessageClicked.bind(this);
    }

    public onUpdateMessageClicked(
    ): void {
        this.setState({
            counter: this.state.counter + 1,
            message: `Updated Message - ( ${ this.state.counter + 1 } times )`,
        }, () => {
            console.log(RenderCompPage.name, ': State Changed...');
        });
    }

    public render(
    ): ReactNode {
        console.log(RenderCompPage.name, ': Rendering...');

        return (
            <>
                <h1 className='mt-3'>Render with Typescript Component</h1>

                <div className='alert alert-info' role='alert'>
                    Open browser <span className='fw-bold'>Console</span> to see Render details
                </div>

                <div>
                    <h4 className='py-3'>State updated by Page</h4>

                    <MessageComponent message='Fixed Message'></MessageComponent>
                    <MessageComponent message={ this.state.message ?? 'Yet to Set' }></MessageComponent>

                    <button onClick={ this.onUpdateMessageClicked } className='btn btn-primary'>Update Message</button>

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
        )
    }
}