import { Logo } from '@components/logo';
import { t } from '@i18n/index';

import styles from './style.module.less';

const MainFooter = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <Logo inverse />
      </div>
      <div className={styles.center}>
        {t('credits')}
      </div>
      <ul className={styles.right}>
        <li><a href='#'>{t('terms')}</a></li>
        <li><a href='#'>{t('privacy')}</a></li>
      </ul>
    </div>
  );
};

export default MainFooter;
