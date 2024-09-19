// conditional rendering = allows you to control what gets rendered
//                         in your application based on certain conditions
//                         (show, hide, or change components) 

import styles from './conditionalRendering.module.css'
import PropTypes from 'prop-types'

function UserGreeting(props)
{
    const welcomeMessage = <h2 className={styles.welcomeMessage}>
                                Welcome {props.username}
                            </h2>

    const loginPrompt =    <h2 className={styles.loginPrompt}>
                                Please log in to Continue
                                </h2>

    return (props.isLoggedIn ?  welcomeMessage:loginPrompt);
}
UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn : false,
    username :Guest
}

export default UserGreeting;