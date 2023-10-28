export type MessageComponentProps = {
    message: string;
}

export const MessageComponent = (
    props: MessageComponentProps
): JSX.Element => {
    console.log(MessageComponent.name, ': Rendering...', props.message);

    return (
        <p>
            <span className='ps-5'>Message updated by Parent:</span>
            <span className='ps-2 font-monospace fw-semibold'>{ props.message }</span>
        </p>
    );
};

export default MessageComponent;