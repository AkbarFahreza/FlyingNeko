// api/videos.js

export default function handler(req, res) {
    const videos = [
      {
        title: "Livechat 1",
        description: "Yang ngekomis kak Fika",
        thumbnail: "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1681281078/Tamnel_Fika_1_k0zpnn.png",
        videoLink: "https://twitter.com/i/status/1645787507840401415.mp4",
        sourceLink: "https://twitter.com/Revernry/status/1645787507840401415?s=20",
      },
      {
        title: "Video 2",
        description: "This is the second video",
        thumbnail: "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1681280284/Tamnel_Fika_xd4wng.png",

        videoLink: "https://example.com/video2.mp4",
        sourceLink: "https://example.com/source2",
      },
      {
        title: "Video 3",
        description: "This is the third video",
        thumbnail: "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1681280284/Tamnel_Fika_xd4wng.png",

        videoLink: "https://example.com/video3.mp4",
        sourceLink: "https://example.com/source3",
      },
    ];
  
    res.status(200).json(videos);
  }
  