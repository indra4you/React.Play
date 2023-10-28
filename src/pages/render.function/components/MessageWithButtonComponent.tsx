import { useState } from 'react';

export type MessageWithButtonComponentState = {
    message: string;
    counter: number;
}

export const MessageWithButtonComponent = (
): JSX.Element => {
    const [ state, setState ] = useState<MessageWithButtonComponentState>({
        message: 'State Message',
        counter: 0
    });

    function onUpdateMessageClicked(
    ): void {
        setState({
            counter: state.counter + 1,
            message: `Updated Message - ( ${ state.counter + 1 } times )`,
        });

        console.log(MessageWithButtonComponent.name, ': State Changed...');
    }

    console.log(MessageWithButtonComponent.name, ': Rendering...', state.message);

    return (
        <div>
            <h4 className='py-3'>State updated by Component</h4>

            <p>
                <span className='ps-5'>Message updated by Self:</span>
                <span className='ps-2 font-monospace fw-semibold'>{ state.message ?? 'Yet to Set' }</span>
            </p>

            <button onClick={ onUpdateMessageClicked } className='btn btn-success'>Update Message</button>

            <p className='mt-3 fs-6 fst-italic'>
                Expected Behaviour&nbsp;:&nbsp;
                <span className='fw-light'>To render/re-render this component only</span>
            </p>
        </div>
    );
};

export default MessageWithButtonComponent;