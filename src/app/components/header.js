"use client"
import styles from "./header.module.css";
import {useRouter} from "next/navigation";

const Header = ({ value }) => {
    const router = useRouter();


    const handleRedirect = (value) => {
        router.push(value);
    };


    return (
    <>
        {value === "author" ? (
            <div className={styles.logoParent}>
                <div className={styles.logo} onClick={() => handleRedirect('/pages/author/profile-author')}>
                    <img className={styles.logo51Icon} alt="" src="/logo5-1@2x.png" />
                    <div className={styles.publishHouse}>Publish House</div>
                </div>
                <div className={styles.frameParent}>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/author/profile-author')}>
                        <b className={styles.b}>Профіль</b>
                    </div>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/author/writings-author')}>
                        <b className={styles.b}>Мої рукописи</b>
                    </div>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/author/send-author')}>
                        <b className={styles.b}>Подати рукопис</b>
                    </div>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/author/profile-author#statistic')}>
                        <b className={styles.b}>Продажі</b>
                    </div>
                </div>
            </div>
        ) : value === "editor" ? (
            <div className={styles.logoParent}>
                <div className={styles.logo} onClick={() => handleRedirect('/pages/editor/profile-editor')}>
                    <img className={styles.logo51Icon} alt="" src="/logo5-1@2x.png" />
                    <div className={styles.publishHouse}>Publish House</div>
                </div>
                <div className={styles.frameParent}>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/editor/profile-editor')}>
                        <b className={styles.b}>Профіль</b>
                    </div>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/editor/list-writings-editor')}>
                        <b className={styles.b}>Список рукописів</b>
                    </div>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/editor/list-writings-editor')}>
                        <b className={styles.b}>Статистика</b>
                    </div>
                </div>
            </div>
        ) : value === "manager" ? (
            <div className={styles.logoParent}>
                <div className={styles.logo} onClick={() => handleRedirect('/pages/manager/profile-manager')}>
                    <img className={styles.logo51Icon} alt="" src="/logo5-1@2x.png" />
                    <div className={styles.publishHouse}>Publish House</div>
                </div>
                <div className={styles.frameParent}>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/manager/profile-manager')}>
                        <b className={styles.b}>Профіль</b>
                    </div>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/manager/publication-manager')}>
                        <b className={styles.b}>Публікації</b>
                    </div>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/manager/ware-house-manager')}>
                        <b className={styles.b}>Склад</b>
                    </div>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/manager/advertising-manager')}>
                        <b className={styles.b}>Реклама</b>
                    </div>
                </div>
            </div>
        ) : (
            <div className={styles.logoParent}>
                <div className={styles.logo} onClick={() => handleRedirect('/pages/advertiser/profile-advertiser')}>
                    <img className={styles.logo51Icon} alt="" src="/logo5-1@2x.png" />
                    <div className={styles.publishHouse}>Publish House</div>
                </div>
                <div className={styles.frameParent}>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/advertiser/profile-advertiser')}>
                        <b className={styles.b}>Профіль</b>
                    </div>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/manager/buu-ad-advertiser')}>
                        <b className={styles.b}>Забронювати рекламу</b>
                    </div>
                    <div className={styles.container} onClick={() => handleRedirect('/pages/advertiser/profile-advertiser')}>
                        <b className={styles.b}>Статистика</b>
                    </div>
                </div>
            </div>
        )}
    </>
  );
};

export default Header;
