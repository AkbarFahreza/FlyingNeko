// api/Pwirtifilii.js

export default function handler(req, res) {
  const data = [
    {
      client: "Fika Shinhari 【Vcafe】",
      images: [
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1681281078/Tamnel_Fika_1_k0zpnn.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1682590972/image_5_uafqc7.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1682590928/image_6_n7cxvr.png",
      ],
      videoLink: "https://www.youtube.com/watch?v=jBg6a-f-LYc",
    },
    {
      client: "Mochawii",
      images: [
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1682600277/Frame_4_skgiyh.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1682591406/Screenshot_from_2023-04-27_17-29-06_ybrtz7.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1682591404/Screenshot_from_2023-04-27_17-29-29_wdqcdg.png",
      ],
      videoLink: "https://www.youtube.com/watch?v=L6fxox0CBTs",
    },
    {
      client: "Wintergea Ch. 【Yorukaze】",
      images: [
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684035466/Frame_5_6_egqzrs.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684034742/Screenshot_from_2023-05-14_09-30-56_oxgjoo.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684034740/Screenshot_from_2023-05-14_09-33-16_ogesrw.png",
      ],
      videoLink: "https://www.youtube.com/watch?v=Kq_Sjyd_GnI&t=2849s",
    },
    {
      client: "Hafidh Hizora Ch.",
      images: [
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684036866/Frame_2_6_bbp43u.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684033647/Screenshot_from_2023-05-14_09-42-54_ipyght.png",
      ],
      videoLink: "https://www.youtube.com/watch?v=UZBNzoBScx4&t=810s",
    },
    {
      client: "Zizana Laskaris【VTuber】",
      images: [
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684735109/Screenshot_from_2023-05-22_12-57-06_i1ftq7.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684735110/Screenshot_from_2023-05-22_12-50-44_qlncp8.png",
      ],
      videoLink: "https://www.youtube.com/live/WsixwsGaocs?feature=share",
    },
    {
      client: "Grind Misfortune Ch.",
      images: [
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684735678/Screenshot_from_2023-05-22_13-07-39_pbrwk0.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684735681/Screenshot_from_2023-05-22_13-05-46_gpr0vf.png",
      ],
      videoLink: "https://www.youtube.com/live/WsixwsGaocs?feature=share",
    },
    {
      client: "Nekonyan Aimi Ch. 爱美",
      images: [
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684739473/Screenshot_from_2023-05-22_14-05-28_yc0y0p.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684739476/Screenshot_from_2023-05-22_14-10-39_ysmnvc.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1684739476/Screenshot_from_2023-05-22_14-08-35_sqjorm.png",
      ],
      videoLink: "https://www.youtube.com/watch?v=jV6nMzOAdaE&t=2618s",
    },
    {
      client: "Narra Arraesya Ch.",
      images: [
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1685602606/Screenshot_from_2023-06-01_13-56-27_iuyexi.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1685602415/Screenshot_from_2023-06-01_13-48-12_cyktrc.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1685602414/Screenshot_from_2023-06-01_13-49-12_ynmb4p.png",
      ],
      videoLink: "https://www.youtube.com/@narraesya",
    },
    {
      client: "Namamu Nanti Disini ☝️😅",
      images: [
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1682599404/Frame_5_v8moik.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1682599404/Frame_6_qnitbt.png",
        "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1682599404/Frame_7_fnp5xq.png",
      ],
      videoLink: "https://twitter.com/Revernry",
    },
  ];

  res.status(200).json(data);
}
