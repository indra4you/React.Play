import {
    Component,
    ReactNode
} from 'react';

export class ChildH4Component extends Component {
    public render(
    ): ReactNode {
        console.log(ChildH4Component.name, ': Rendering...');

        return (
            <h4 className='py-3'>Children of Child Component</h4>
        );
    }
}