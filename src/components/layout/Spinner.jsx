import Loader from './assets/loader.svg'

function Spinner(){
    return(
        <div className='w-100 mt-20'>
            <img 
            src={Loader} 
            width={180} 
            alt="loading..."
            className='text-center mx-auto'
            />
        </div>
    )
}

export default Spinner