"use client"
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from '@/components/Navbar/Navbar.module.scss';
import { ThemeContext } from '@/context/ThemeContext';
import { HiSun, HiMoon } from 'react-icons/hi';
import Image from 'next/image';
import { useGithubUserData } from '@/Hooks/gitHub';

function Navbar() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { data: githubUserData } = useGithubUserData('samanabasi');

  return (
    <header className={styles.navbar}>
      <Link href="/">
        <h3 className={styles.logo}>overreactedblog</h3>
      </Link>
      <div className={styles.themeWrapper}>
        {githubUserData && (
          <Link className={styles.profile} href={githubUserData.html_url} passHref>
              <span>by</span>
              <Image
                src={githubUserData.avatar_url}
                alt={`${githubUserData.login}'s avatar`}
                width={40}
                height={40}
                className={styles.githubAvatar}
              />
          </Link>
        )}

        <button
          className={styles.button}
          onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <HiMoon className={styles.moon} /> : <HiSun className={styles.sun} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
