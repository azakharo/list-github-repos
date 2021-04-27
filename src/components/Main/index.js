import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames/bind';
import {Button} from 'antd';
import {Octokit} from '@octokit/rest';

import errorImg from 'IMAGES/error-page-icon.png';
import {logout, selectUsername} from 'src/store/slices/auth';
import styles from './styles.css';

const cx = classNames.bind(styles);

const octokit = new Octokit();

const Main = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  const [repos, setRepos] = useState([]);

  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);

  useEffect(() => {
    octokit.rest.repos
      .listForUser({
        username: 'azakharo',
        per_page: 100,
      })
      .then(data => {
        console.log(data);
        setRepos(data.data);
      });
  }, []);

  return (
    <div className={cx('container')}>
      <header>
        <img className={cx('logo')} src={errorImg} alt="logo" />
        {username && (
          <span className={cx('greeting')}>
            <span>Hello </span>
            <span className={cx('username')}>{username}</span>
          </span>
        )}
        <Button onClick={handleLogout}>Logout</Button>
      </header>
      <aside>Sidebar</aside>
      <main>
        <ul className={cx('repo-list')}>
          {repos.map(({name}) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </main>
      <footer />
    </div>
  );
};

export default React.memo(Main);
