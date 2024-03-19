import "./Github.css"
import { PushpinOutlined,
        AimOutlined,
        UsergroupAddOutlined,
        FolderOpenOutlined,
        LinkedinOutlined,
        EyeOutlined,
        CodeOutlined,
        BranchesOutlined
}from '@ant-design/icons'
import { useEffect, useState } from 'react';

export default function Github() {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/ArindamBhatta')
        .then(res => res.json())
        .then(userData => {
            console.log(userData);
            setUser(userData);
            fetch(userData.repos_url)
                .then(res => res.json())
                .then(repoData => {
                    setRepos(repoData);
                });
        });
    }, []);

    return (
        <div className='main-container'>
            {user && (
                <div className='user-info'>
                    <img src={user?.avatar_url} alt="Avatar" className='avarate-img'/>
                    <div className="git-hub-info">
                        <p>{user?.name}</p>
                        <p>  <AimOutlined /> Bio - {user?.bio}</p>
                        <p> <PushpinOutlined /> Liveat - {user?.location}</p>
                        <p> <UsergroupAddOutlined /> {user?.company}</p>
                        <p> <FolderOpenOutlined /> Repositories - {user?.public_repos}</p>
                        <p> <EyeOutlined /> Followers - {user?.followers}</p>
                        <p><LinkedinOutlined /> arindam-bhattacharyya </p>
                    </div>
                </div>
            )}

            <div className='Repositories'>
              <h3>Repositories:</h3>
                <div className="repositories-container">
                    <ul className="grid-property">
                        {repos.map(repo => (
                                <li key={repo.id} className="all-reposetory">
                                    <div className="position">
                                        <p> <FolderOpenOutlined /> Repositorie name: - <span> {repo.name} </span> </p>   
                                        <p>  <CodeOutlined /> Language name: - <span> {repo.language} </span></p> 
                                        <p> <BranchesOutlined /> Clone Url: - <span> {repo.clone_url}</span> </p>
                                        <p> <EyeOutlined /> Watchers <span> {repo.watchers} </span> </p>
                                    </div>
                                </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
