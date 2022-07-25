import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Profile from '../components/profile';
import ProjectPreview, { ProjectPreviewInterface } from '../components/project_preview';

const Home: NextPage = () => {
  const projectMetadataArray = [];

  projectMetadataArray.push(
    {
      title: 'Ecommerce App',
      desc: 'Build With Flutter',
      linkUrl: '/mobile_app',
      image: '/mobileapp.jpg'
    }
  );

  projectMetadataArray.push(
    {
      title: 'Website App',
      desc: 'Build With Next.js',
      linkUrl: '/web_app',
      image: '/webapp.jpg'
    }
  );

  projectMetadataArray.push(
    {
      title: 'Artificial Intelligence',
      desc: 'Build With Python',
      linkUrl: '/ai_app',
      image: '/aiapp.jpg'
    }
  );

  const ProjectPreviewElements = [];
  // <ProjectPreview {...projectPreviewData}
  
  for (let i = 0; i < projectMetadataArray.length; i++){

  const metaData = projectMetadataArray[i];
  const element = <ProjectPreview {...metaData} key={i} />;
  ProjectPreviewElements.push(element);
}

  return (
    <div>
      <Profile />
      <div className="mt-4 flex flex-col gap-4">
        {ProjectPreviewElements}
      </div>
    </div>
  );
};

export default Home;
