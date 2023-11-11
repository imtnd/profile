import type { NextApiRequest, NextApiResponse } from 'next';

type SpeakingHistory = {
  id: number;
  conference: string;
  date: string;
  title: string;
  url: string;
  image: string;
};

const speakingHistory: SpeakingHistory[] = [
  {
    id: 1,
    conference: '長崎IT技術者会　第10回勉強会',
    date: '2016-01-23',
    title: 'アジャイルプラクティス導入事例',
    url: 'https://www.slideshare.net/ShunTsunoda/ss-57420917',
    image: 'https://media.connpass.com/thumbs/94/1e/941e00cfc1bb555f056e444db0b19f22.png',
  },
  {
    id: 2,
    conference: '長崎IT技術者会　第13回勉強会',
    date: '2016-04-23',
    title: 'Docker入門',
    url: 'https://speakerdeck.com/imtnd/dockerru-men',
    image: 'https://media.connpass.com/thumbs/40/b1/40b109fb862be9e9d0659804e4cc423d.png',
  },
  {
    id: 3,
    conference: 'Agile Japan 2016 長崎サテライト with NaITE',
    date: '2016-08-12',
    title: 'Are you ready?　～これからアジャイル開発をスタートアップするために　プラクティスの実践と実感～',
    url: 'https://www.slideshare.net/Ikedon/are-you-ready-64913541',
    image: 'https://media.connpass.com/thumbs/40/b1/40b109fb862be9e9d0659804e4cc423d.png',
  },
  {
    id: 4,
    conference: 'XP祭り2016',
    date: '2016-09-24',
    title: 'アジャイルやってみた話',
    url: 'https://www.slideshare.net/ShunTsunoda/ss-66373931',
    image: 'http://xpjug.com/wp-content/uploads/2016/09/xp2016-eyecatch.png',
  },
  {
    id: 5,
    conference: 'WACATE 2017 夏',
    date: '2017-06-17',
    title: 'テスト方針説明(資料非公開)',
    url: '',
    image: 'wacate_logo.jpg',
  },
  {
    id: 6,
    conference: '長崎IT技術者会　第23回勉強会',
    date: '2017-07-16',
    title: 'Git Flowを運用するために',
    url: 'https://www.slideshare.net/ShunTsunoda/git-flow-77929819',
    image: 'https://media.connpass.com/thumbs/3a/e8/3ae8066760bdaaf452e6054818b83691.png',
  },
  {
    id: 7,
    conference: 'WACATE 2017 冬',
    date: '2017-12-16',
    title: 'ソースコードを読んでみよう',
    url: 'https://www.slideshare.net/ShunTsunoda/ss-84299783',
    image: 'wacate_logo.jpg',
  },
  {
    id: 8,
    conference: 'WACATE 2018 夏',
    date: '2018-06-16',
    title: '状態遷移テスト',
    url: 'https://speakerdeck.com/imtnd/zhuang-tai-qian-yi-tesuto-state-transition-testing',
    image: 'wacate_logo.jpg',
  },
  {
    id: 9,
    conference: 'Agile Japan 2018 長崎サテライト with NaITE',
    date: '2018-09-15',
    title: '流れを止めないチーム開発(未使用)',
    url: 'https://speakerdeck.com/imtnd/liu-rewozhi-menaitimukai-fa',
    image: 'https://media.connpass.com/thumbs/2a/26/2a2614e0882e8862ff8b00fd8c15552d.png'
  },
  {
    id: 10,
    conference: 'WACATE 2018 冬',
    date: '2018-12-15',
    title: 'コードカバレッジを知ろう',
    url: 'https://speakerdeck.com/imtnd/kodokabaretuziwozhi-rou',
    image: 'wacate_logo.jpg',
  },
  {
    id: 11,
    conference: 'Agile Japan 2019 長崎サテライト with NaITE',
    date: '2019-03-23',
    title: 'Agile Japan 2019 Report',
    url: 'https://speakerdeck.com/imtnd/agile-japan-2019-report',
    image: 'https://media.connpass.com/thumbs/d2/78/d278ed8afad9573ca1393a78ed053abd.png',
  },
  {
    id: 12,
    conference: '長崎IT技術者会　第31回勉強会',
    date: '2019-04-07',
    title: 'テストレベル定義について考える',
    url: 'https://speakerdeck.com/imtnd/lets-consider-about-test-levels',
    image: 'https://media.connpass.com/thumbs/2b/8d/2b8dd7bad6f719ffb0faf0aa8361e3ea.png',
  },
  {
    id: 13,
    conference: 'WACATE 2019 夏',
    date: '2019-06-15',
    title: 'ワーク進め方説明(資料非公開)',
    url: '',
    image: 'wacate_logo.jpg',
  },
  {
    id: 14,
    conference: 'JaSST\'19 Hokkaido',
    date: '2019-08-30',
    title: '体験しよう！テスト分析設計エクササイズ(ワークショップTA)',
    url: '',
    image: 'https://www.jasst.jp/banner/jasst19hokkaido.png',
  },
  {
    id: 15,
    conference: 'XP祭り2019',
    date: '2019-09-21',
    title: 'やってみよう状態遷移テスト',
    url: 'https://speakerdeck.com/imtnd/yatutemiyouzhuang-tai-qian-yi-tesuto-number-xpjug',
    image: 'http://xpjug.com/wp-content/uploads/2019/07/xp2019-eyecatch-1.png',
  },
  {
    id: 16,
    conference: 'WACATE 2019 冬',
    date: '2019-12-14',
    title: 'アジャイルとテスト',
    url: 'https://speakerdeck.com/imtnd/agile-and-testing',
    image: 'wacate_logo.jpg',
  },
  {
    id: 17,
    conference: 'JaSST\'20 Tokyo',
    date: '2020-03-09',
    title: 'WACATE流テスト分析のワークショップを体感してみよう（開催中止）',
    url: '',
    image: 'https://jasst.jp/banner/jasst20tokyo.png',
  },
  {
    id: 18,
    conference: 'WACATE 2020 冬',
    date: '2020-12-12',
    title: 'テストの目的を考えよう',
    url: 'https://speakerdeck.com/imtnd/tesutofalsemu-de-wokao-eyou',
    image: 'wacate_logo.jpg',
  },
  {
    id: 19,
    conference: 'JaSST\'21 Tokyo',
    date: '2021-03-15',
    title: 'WACATE流テスト分析のワークショップを体感してみよう',
    url: 'https://speakerdeck.com/imtnd/wacateliu-tesutofen-xi-falsewakusiyotupuwoti-gan-sitemiyou',
    image: 'https://www.jasst.jp/banner/jasst21tokyo02.png',
  },
  {
    id: 20,
    conference: 'WACATE 2021 夏',
    date: '2021-06-12',
    title: 'テスト技法作成のアプローチを考える',
    url: 'https://speakerdeck.com/imtnd/tesutoji-fa-zuo-cheng-falseapurotiwokao-eru',
    image: 'wacate_logo.jpg',
  },
  {
    id: 21,
    conference: 'Agile Japan 2020 長崎サテライト with NaITE',
    date: '2021-06-26',
    title: 'フィードバックを加速させる開発(開催中止)',
    url: '',
    image: 'https://media.connpass.com/thumbs/44/18/441849f8d8a8449298a7eed9f4ec14f5.png',
  },
  {
    id: 22,
    conference: 'WACATE 2021 冬',
    date: '2021-12-12',
    title: 'デシジョンテーブルで振る舞いを整理しよう',
    url: 'https://speakerdeck.com/imtnd/analyze-the-behavior-with-decision-table',
    image: 'wacate_logo.jpg',
  },
  {
    id: 23,
    conference: 'Agile Japan 2021 長崎サテライト with NaITE',
    date: '2022-02-26',
    title: 'アーキテクチャとテスタビリティ(開催中止)',
    url: '',
    image: 'https://media.connpass.com/thumbs/76/b0/76b0cbf5f1976e3aa7dc2b680d99014f.png',
  },
  {
    id: 24,
    conference: 'Scrum Fest Niigata 2022',
    date: '2022-03-21',
    title: 'テスト設計技法をなぜ＆どのように使うのか体験しよう！',
    url: 'https://speakerdeck.com/imtnd/tesutoshe-ji-ji-fa-wonaze-dofalseyounishi-ufalsekati-yan-siyou',
    image: 'https://res.cloudinary.com/dnnqsdghx/image/upload/w_600,f_auto,q_auto:best/v1640690768/ConfLogos/uj2csvkch55s6rclcvf6.png',
  },
  {
    id: 25,
    conference: 'WACATE 2022 夏',
    date: '2022-06-18',
    title: 'ワークショップの目的',
    url: 'https://speakerdeck.com/imtnd/wacate-2022-xia-wakusiyotupufalsemu-de',
    image: 'wacate_logo.jpg',
  },
  {
    id: 26,
    conference: 'JSTQB カンファレンス in 2023 Autumn',
    date: '2023-09-25',
    title: 'パネルディスカッション DevOpsの品質管理',
    url: 'https://jstqb.jp/prinfo/conference2023/',
    image: 'https://media.connpass.com/thumbs/6e/fd/6efd6698e43e585926035f4f3fd6eca1.png',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpeakingHistory[]>
) {
  res.status(200).json(speakingHistory);
}
