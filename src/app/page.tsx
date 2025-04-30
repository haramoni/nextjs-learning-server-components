import Image from "next/image";
import styles from "./page.module.css";
import { Tags } from "./tags";
import { AddTag } from "./add-tag";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<p>Carregando Tags...</p>}>
        <Tags />
      </Suspense>
      <AddTag />
    </div>
  );
}
