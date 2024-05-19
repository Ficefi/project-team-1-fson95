//data.js
import testAvatarSrc from '../assets/test-avatar.jpg';

export const testUser = {
  name: 'Nadia',
  dailyWaterNorma: 1500,
  avatarUrl: testAvatarSrc,
};

export const testWaterDoses = [
  {
    dose: 250,
    date: new Date('2024-05-11'),
  },
  {
    dose: 350,
    date: new Date('2024-05-11'),
  },
  {
    dose: 150,
    date: new Date('2024-05-12'),
  },
];
