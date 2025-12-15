// alloedDevOrigins
module.exports = {
    experimental: {
        allowedDevOrigins: [
            "http://172.26.112.1",
            "http://192.168.1.100",
            "http://localhost"
        ],
    },

    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tse3.mm.bing.net",
      },

      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      
      {
        protocol: "https",
        hostname: "media-exp1.licdn.com",
      },
    ],
  },
};



