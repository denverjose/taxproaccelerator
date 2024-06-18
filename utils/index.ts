export const getCanonicalUrl = () => {
    return process.env.NODE_ENV !== 'production'
      ? 'http://localhost:3000'
      : 'https://taxproaccelerator-nqnm-em396swty-denverjoses-projects.vercel.app';
  };