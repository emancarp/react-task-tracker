
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick =() =>{
        console.log('Click')
    }
    return (
       <header className='header'>
           <h1> {title} </h1>
            <Button 
                text='Add' 
                onClick={onClick}
            />
           
       </header>
    )
}

//const headingStyle = {
//    color:'red', backgroundColor:'Black'
//}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
