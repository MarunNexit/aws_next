"use client"

import {GetAddvertisement} from '../../functions/GetAddvertisement'
import { Amplify } from 'aws-amplify';
import config from '../../../amplifyconfiguration.json';
Amplify.configure(config);
import { useRouter } from 'next/navigation';
import {GetAllUsersInfo} from "@/app/functions/GetAllUsersInfo";
import Header1 from "@/app/components/header1";
import ContainerCard from "@/app/components/container-card";
import SectionCard from "@/app/components/section-card";
import SectionCard1 from "@/app/components/section-card1";
import CooperationSection from "@/app/components/cooperation-section";
import NewPublicationsSection from "@/app/components/new-publications-section";
import AuthorInfoSection from "@/app/components/author-info-section";
import SectionCard2 from "@/app/components/section-card2";
import PublishHouseSection from "@/app/components/publish-house-section";
import styles from "./page.module.css";

const Profile = () => {
    const router = useRouter();

    const handleRedirect = () => {
        // Програмована зміна URL
        router.push('/');
    };


    return (
        <div className={styles.zarrinLandingPage}>
            <section className={styles.menuParent}>
                <Header1/>
                <ContainerCard/>
            </section>
            <SectionCard/>
            <SectionCard1/>
            <CooperationSection/>
            <NewPublicationsSection/>
            <AuthorInfoSection/>
            <SectionCard2/>
            <PublishHouseSection/>
        </div>
    );
}

export default Profile;
