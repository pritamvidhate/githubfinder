import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import githubContext from '../../context/github/githubContext';

const Search = ({clearUsers, showClear, setAlert}) =>{
    const githubContext = useContext(githubContext);
    const [text, setText] = useState('');

    const onSubmit = e =>{
        e.preventDefault();
        if(text === ''){
            setAlert('please enter something', 'light');
        }else{
            searchUsers(text);
            setText('');
        }
    };

    const onChange = e => setText(e.target.value);
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input 
                        type="text" 
                        name="text" 
                        value={text} 
                        placeholder="Search User..."
                        onChange={onChange}
                    />
                    
                    <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-dark btn-block"/>
                </form>
                {showClear && 
                <button className="btn btn-light btn-block" onClick={clearUsers}>
                    Clear
                </button>}
            </div>
        )
}

Search.propTypes = {
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };
export default Search;