import { react } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonLink = props => (
    <Link to={props.url}>
      {props.text} <FontAwesomeIcon icon={props.icon} />
    </Link>
   )

export default ButtonLink
