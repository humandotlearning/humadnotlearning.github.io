import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="d-flex-inline flex-row justify-content-between">
          <Link
            className={clsx('button button--secondary', styles.buttons)}
            // style={{margin: "1rem"}}
            to="https://github.com/humandotlearning">
            github
          </Link>
          <Link
            className={clsx('button button--secondary', styles.buttons)}
            to="/docs/intro">
            linkedin
          </Link>
          <Link
            className={clsx('button button--secondary', styles.buttons)}
            to="/docs/intro">
            twitter
          </Link>
        </div>
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="nithin varghese personal site and blog <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures /> 
      </main>
    </Layout>
  );
}
