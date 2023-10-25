import {
    Component,
    ReactNode
} from 'react';

import {
    MessageComponent,
    MessageWithButtonComponent,
    ChildMessageComponent,
} from './components';

export type RenderPageProps = {
}

export type RenderPageState = {
    message: string;
    counter: number;
}

export class RenderPage extends Component<RenderPageProps, RenderPageState> {
    constructor(
        props: RenderPageProps,
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
            console.log(RenderPage.name, ': State Changed...');
        });
    }

    public render(
    ): ReactNode {
        console.log(RenderPage.name, ': Rendering...');

        return (
            <>
                <h1 className='mt-3'>Render</h1>

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
                    <h4 className='py-3'>Children of Child Component</h4>
                </ChildMessageComponent>
            </>
        )
    }
}