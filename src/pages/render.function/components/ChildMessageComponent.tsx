import { PropsWithChildren } from 'react';

export type ChildMessageComponentProps = PropsWithChildren & {
}

export const ChildMessageComponent = (
    props: ChildMessageComponentProps,
): JSX.Element => {
    console.log(ChildMessageComponent.name, ': Rendering...');

    return (
        <div>
            { props.children }

            <p className='mt-3 fs-6 fst-italic'>
                Expected Behaviour&nbsp;:&nbsp;
                <span className='fw-light'>On page state change, to re-render this component and it's children</span>
            </p>
        </div>
    );
}

export default ChildMessageComponent;