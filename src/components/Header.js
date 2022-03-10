import React, { useEffect, useReducer, useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { auth, provider } from '../firebase'
import { useHistory } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';


function Header() {
  const history = useHistory();
  const [card, Setcard] = useState(false)
  const [UserLogin, setUserLogin] = useState({
    name: '',
    email: '',
    photo: ''
  })

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        })
      
      }
    })

  }, [])

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        })
        window.location.reload(true);
      })

  }

  const signOut = () =>{
    auth.signOut()
    .then(()=>{
        UserLogin.name = null;
        UserLogin.email = null;
        UserLogin.photo = null;
        window.location.reload(true);
    })
}
const cancel = () => {
  window.location.reload(true);
}

  const deleteUser = () => {

    confirmAlert({
      title: '',
      message: 'Are you sure that you want to delete these customer?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => signOut()
        },
        {
          label: 'No',
          onClick: () => cancel()
        }
      ]
    });
  }
  return (

    <div className='nav__menu'>
      <div className='nav__left'>
        <div className='nav__logo'>
          Admin panel
        </div>
        <MenuIcon className='nav__menu__icon' />

      </div>

      <div className='nav__right'>
        <NotificationsIcon className='nav__noti' />
        {!UserLogin.name ? (<div className='login' onClick={signIn}>login</div>):
            <>
              <img className='nav__profile' onClick={() => Setcard(!card)} src={UserLogin.photo} />
              <div className={card ? "burgermenu" : "none"}>
                <div className='burger_header'>

                </div>
                <div className="burger_profile_set" >
                  <div className='burger_profile'>
                    <img className='burger_image' src={UserLogin.photo} />
                  </div>
                </div>
                <div className='burger_close' onClick={() => Setcard(!card)}>
                  <ClearIcon/>
                </div>

                <div className='burger_title'>
                  {UserLogin.name}
                </div>
                <div className="burger_action">
                  <div className='burger_account'>My account</div>
                  <div className="burger_logout" onClick={signOut}>Log out</div>
                </div>
                <div className="action_section">
                  <DeleteIcon className="action_delete" fontSize="small" onClick={deleteUser} />
                  <RemoveRedEyeIcon className="action_eye" fontSize="small" />

                </div>

              </div>
            </>
        }
      </div>



    </div>


  )
}

export default Header