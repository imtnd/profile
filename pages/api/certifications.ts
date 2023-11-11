import type { NextApiRequest, NextApiResponse } from 'next';

type Certification = {
  id: number;
  name: string;
  image: string;
};

const Certifications : Certification[] = [
  {
    id: 1,
    name: 'test',
    image: 'https://www.ipa.go.jp/common/img/logo.svg'
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Certification[]>
) {
  res.status(200).json(Certifications);
}
