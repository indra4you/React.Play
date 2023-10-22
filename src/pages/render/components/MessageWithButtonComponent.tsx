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
            <>
                <p>
                    <span className='ps-5'>Message from Children:</span>
                    <span className='ps-2 font-monospace fw-semibold'>{ this.state.message ?? 'Yet to Set' }</span>
                </p>

                <button onClick={ this.onUpdateMessageClicked } className='btn btn-success'>Update Message</button>
            </>
        );
    }
}