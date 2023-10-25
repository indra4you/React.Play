import {
    Component,
    ReactNode
} from 'react';

export type MessageWithButtonComponentProps = {
}

export type MessageWithButtonComponentState = {
    message: string;
    counter: number;
}

export class MessageWithButtonComponent extends Component<MessageWithButtonComponentProps, MessageWithButtonComponentState> {
    constructor(
        props: MessageWithButtonComponentProps,
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
            console.log(MessageWithButtonComponent.name, ': State Changed...');
        });
    }

    public render(
    ): ReactNode {
        console.log(MessageWithButtonComponent.name, ': Rendering...', this.state.message);

        return (
            <div>
                <h4 className='py-3'>State updated by Component</h4>

                <p>
                    <span className='ps-5'>Message updated by Self:</span>
                    <span className='ps-2 font-monospace fw-semibold'>{ this.state.message ?? 'Yet to Set' }</span>
                </p>

                <button onClick={ this.onUpdateMessageClicked } className='btn btn-success'>Update Message</button>

                <p className='mt-3 fs-6 fst-italic'>
                    Expected Behaviour&nbsp;:&nbsp;
                    <span className='fw-light'>To render/re-render this component only</span>
                </p>
            </div>
        );
    }
}