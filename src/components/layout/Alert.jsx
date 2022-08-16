import {useContext} from 'react';
import alertContext from '../../context/alert/AlertContext';

function Alert() {
    const {alert} = useContext(alertContext);

    return alert !== null && (
        <h3 className='flex items-start mb-4 space-x-2 font-semibold text-base'>Please Enter Something!</h3>
    )
}

export default Alert;

