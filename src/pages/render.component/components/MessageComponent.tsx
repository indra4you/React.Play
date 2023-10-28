import {
    Component,
    ReactNode
} from 'react';

export type MessageComponentProps = {
    message: string;
}

export class MessageComponent extends Component<MessageComponentProps> {
    public render(
    ): ReactNode {
        console.log(MessageComponent.name, ': Rendering...', this.props.message);

        return (
            <p>
                <span className='ps-5'>Message updated by Parent:</span>
                <span className='ps-2 font-monospace fw-semibold'>{ this.props.message }</span>
            </p>
        );
    }
}