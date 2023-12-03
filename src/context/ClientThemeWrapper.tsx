import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import styles from './ClientThemeWrapper.module.scss';
export default function ClientThemeWrapper({ children }: any) {
  const { theme } = useContext(ThemeContext);

  return <div className={theme === 'dark' ? styles.darkTheme : styles.lightTheme}>{children}</div>;
}
