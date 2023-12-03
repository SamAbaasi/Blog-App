import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const ArticleSkeleton = () => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext ? themeContext.theme : 'light';

    const baseColor = theme === 'dark' ? "purple" : undefined;
    const highlightColor = theme === 'dark' ? "pink" : undefined;
    return (
        <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
            <Skeleton className='dark' height={100} width={632} style={{ marginTop: '40px', borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}/>
            <Skeleton height={20} width={130} style={{marginBottom: '10px'}}/>
            <Skeleton height={20} width={578}/>
            <Skeleton height={20} width={170}/>
        </SkeletonTheme>
    )
}
export default ArticleSkeleton;