import  React  from 'react';
import PropTypes from "prop-types";
import { IconProps } from './IconProps';

/**
 * Use `Icon` to create Material Design Icons <br/>
 * For complete set of icons see: https://material.io/resources/icons/
 */
export const Icon = ({name , size, className}:IconProps) => {

    let additionalClasses = `material-icons md-${size} ${className}`;

    return (<i className={additionalClasses}>{ name }</i>)
        
}

Icon.propTypes = {
    /** Name of the material design icon */
    name: PropTypes.string.isRequired,

    /** Size of the icon, 18, 24, 36, 48.  Default is 24 */
    size: PropTypes.oneOf<number>([18,24,36,48]),

    /** Additional classes to apply styling*/
    className: PropTypes.string
  };

  Icon.defaultProps = {
    name: 'help',
    size: 24
  };

//export default Icon; 