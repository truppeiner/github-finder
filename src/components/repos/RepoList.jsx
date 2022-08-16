import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function RepoList({ repos }){
    return(
        <div className='rounded-lg shadow-lg card bg-slate-400'>
            <div className='card-body'>
                <h2 className='card-title text-3xl my-4 font-bold'>
                    Latest Repositiories
                </h2>
                {repos.map((repo) => (
                    <RepoItem key={repo.id} repo={repo}/>
                ))}
            </div>
        </div>
    )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired,

}
export default RepoList;