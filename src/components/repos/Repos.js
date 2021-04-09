import React from 'react'
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = () => {
    return Repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)
        
}

Repos.PropTypes = {
    repos : PropTypes.shape({}).isRequired
};
export default Repos;
