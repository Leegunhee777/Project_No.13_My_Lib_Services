type PathType = {
  home: string;
  intro: {
    root: string;
  };
  docs: {
    root: string;
    default: string;
  };
  contact: {
    root: string;
  };
};

export const PATH: PathType = {
  home: '/',
  intro: {
    root: '/intro',
  },
  docs: {
    root: '/docs/:path',
    default: '/docs/button'
  },
  contact: {
    root: '/contact',
  },
};
