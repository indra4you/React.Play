import {
    Component,
    ReactNode
} from 'react';

export class HomePage extends Component {
    public render(
    ): ReactNode {
        console.log(HomePage.name, ': Rendering...');

        return (
            <div className='alert alert-primary mt-3' role="alert">
                <h4 className='alert-heading'>Welcome to React.Play</h4>
                <hr />
                <p className='mb-0'>React.Play is a collection of verious "React" features and usage of them.</p>
            </div>
        )
    }
}