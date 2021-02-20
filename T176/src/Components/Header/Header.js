import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const Header = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='https://raw.githubusercontent.com/pranjals149/acevent/75eed4a1a0a65bdde48eddf5e5c061fca26b3934/expend/expend.svg' alt='' />
            </Link>



            <div className='header__search'>
                <Link to='/buy'>
                    <h1 className='header__h1'>Buy</h1>
                </Link>
            </div>


            <div className='header__nav'>
                <Link to='/login'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            Hello Farmers
                        </span>

                        {/* <span className='header__optionLineTwo'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span> */}
                    </div>
                </Link>

                {/* <Link to='/order'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            Returns
                        </span>

                        <span className='header__optionLineTwo'>
                            & Orders
                        </span>
                    </div>
                </Link> */}

                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
