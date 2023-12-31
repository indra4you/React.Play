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
            <nav className='navbar navbar-expand bg-body-tertiary'>
                <div className='container'>
                    <span className='navbar-brand mb-0 h1'>
                        React.Play
                    </span>

                    <div className='navbar-nav me-auto'>
                        <Link to="/" className='nav-link'>
                            Home
                        </Link>
                        
                        <Link to="/render/component" className='nav-link'>
                            Render with Component
                        </Link>
                        
                        <Link to="/render/function" className='nav-link'>
                            Render with Function
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}