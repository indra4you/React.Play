import {
    Component,
    PropsWithChildren,
    ReactNode
} from 'react';

export type ChildMessageComponentProps = PropsWithChildren & {
}

export class ChildMessageComponent extends Component<ChildMessageComponentProps> {
    public render(
    ): ReactNode {
        console.log(ChildMessageComponent.name, ': Rendering...');

        return (
            <div>
                { this.props.children }

                <p className='mt-3 fs-6 fst-italic'>
                    Expected Behaviour&nbsp;:&nbsp;
                    <span className='fw-light'>On page state change, to re-render this component and it's children</span>
                </p>
            </div>
        );
    }
}