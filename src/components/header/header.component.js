 import React from 'react'
 import './header.styles.scss'
 import {Link} from 'react-router-dom';
 import {ReactComponent as Logo} from '../../assets/logo.svg'
 import {auth} from '../../firebase/firebase.utils'
 import {connect} from 'react-redux'
 import CartIcon from '../cart-icon/cart-icon.component'
 import CartDropDown from '../cart-dropdown/cart-dropdown.component'

  const Header = ({currentUser, hidden}) => ( 
    <div className ='header'>
        <Link className= 'logo-container' to='/'>
            <Logo className = 'logo'/>
            </Link>
        <div className = 'options'>
        <Link className = 'option' to='/shop'>
         SHOP
        </Link>
        <Link className = 'option' to='/shop'>
          CONTACT
        </Link>
         {
           currentUser ? 
           <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
           : 
           <Link className='option' to='/signin'> 
            SIGN IN
           </Link>
         }
         <CartIcon/>
        </div>
        {hidden ? null : 
        <CartDropDown/> }

    </div>

  )
// passing the state to header component and destructuring it so you can 
//access it in the header component 

  const mapStateToProps = ({user:{currentUser}, cart:{hidden } }) => ({ 
    currentUser,
    hidden
  });

  export default connect(mapStateToProps)(Header);