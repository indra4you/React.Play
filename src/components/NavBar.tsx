import {
    Component,
    ReactNode
} from 'react';
import { Link } from 'react-router-dom';

export class NavBarComponent extends Component {
    public render(
    ): ReactNode {
        console.log(NavBarComponent.name, ': Rendering...');

        return (
            <nav className='navbar bg-body-tertiary'>
                <div className='container'>
                    <span className='navbar-brand mb-0 h1'>
                        React.Play
                    </span>

                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link to="/" className='nav-link active'>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}