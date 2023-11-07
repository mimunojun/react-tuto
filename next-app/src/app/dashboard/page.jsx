"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const session = useSession();
    const router = useRouter();

    // client side fetching (SWR)
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        `api/posts?username=${session?.data?.user.name}`,
        fetcher
    );

    console.log(data);

    if (session.status === "loading") {
        return <p>loading</p>;
    }
    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login");
    }

    // console.log(data);
    if (session.status === "authenticated") {
        return <div className={styles.container}>dashboard</div>;
    }
};

export default Dashboard;
