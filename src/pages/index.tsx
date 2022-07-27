/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React from 'react';
 import clsx from 'clsx';
 import Link from '@docusaurus/Link';
 import Translate, {translate} from '@docusaurus/Translate';
 import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
 import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
 
 import Layout from '@theme/Layout';
 

 import Features, {type FeatureItem} from '@site/src/data/features';
 
 import styles from './styles.module.css';
 
 function HeroBanner() {
   return (
     <div className={styles.hero} data-theme="dark">
       <div className={styles.heroInner}>
         <h1 className={styles.heroProjectTagline}>
           <img
             alt={translate({message: 'Consolo Superhero'})}
             className={styles.heroLogo}
             src={useBaseUrl('/img/undraw_superhero.svg')}
             width="500"
             height="500"
           />
           <span
             className={styles.heroTitleTextHtml}
             // eslint-disable-next-line react/no-danger
             dangerouslySetInnerHTML={{
               __html: translate({
                 id: 'homepage.hero.title',
                 message:
                   '<b>Quickly</b> access all of the materials you need to build your <b>professional</b> agency.',
                 description:
                   'Home page hero title, can contain simple html tags',
               }),
             }}
           />
         </h1>
         <div className={styles.indexCtas}>
           <Link className="button button--primary" to="/docs">
             Get Started
           </Link>
           <Link className="button button--info" href="https://dev.us12.list-manage.com/subscribe?u=e08bc63eba2534c069fdbb91f&id=ad3ecdc097">
            Sign Up for Updates
           </Link>
         </div>
       </div>
     </div>
   );
 }


 
 function Feature({
   feature,
   className,
 }: {
   feature: FeatureItem;
   className?: string;
 }) {
   const {withBaseUrl} = useBaseUrlUtils();
 
   return (
     <div className={clsx('col', className)}>
       <img
         className={styles.featureImage}
         alt={feature.title}
         width={Math.floor(feature.image.width)}
         height={Math.floor(feature.image.height)}
         src={withBaseUrl(feature.image.src)}
         loading="lazy"
       />
       <h3 className={clsx(styles.featureHeading)}>{feature.title}</h3>
       <p className="padding-horiz--md">{feature.text}</p>
     </div>
   );
 }
 
 function FeaturesContainer() {
   const firstRow = Features.slice(0, 3);
   const secondRow = Features.slice(3);
 
   return (
     <div className="container text--center">
       <h2>
         <Translate>Main features</Translate>
       </h2>
       <p></p>
       <div className="row margin-bottom--lg">
         {firstRow.map((feature, idx) => (
           <Feature feature={feature} key={idx} />
         ))}
       </div>
       <div className="row">
         {secondRow.map((feature, idx) => (
           <Feature
             feature={feature}
             key={idx}
             className={clsx('col--4', idx === 0 && 'col--offset-2')}
           />
         ))}
       </div>
     </div>
   );
 }
 
 export default function Home(): JSX.Element {
   const {
     siteConfig: {customFields, tagline},
   } = useDocusaurusContext();
   const {description} = customFields as {description: string};
   return (
     <Layout title={tagline} description={description}>
       <main>
         <HeroBanner />
         <div className={styles.section}>
           <FeaturesContainer />
         </div>
       </main>
     </Layout>
   );
 }