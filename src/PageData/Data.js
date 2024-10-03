const fighters = [
  {
    name: "Merab",
    surName: "Dvalishvili",
    email: "merab.dvalishvili@example.com",
    text: "They call me 'The Machine' for a reason! I never stop coming forward. My cardio is my weapon, and I'll keep pushing until my opponents break. I respect all fighters, but when I'm in that cage, it's all business. My goal? To be the best bantamweight the UFC has ever seen.",
    src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2024-09/DVALISHVILI_MERAB_BELT.png?h=a30e7339&itok=-Ee3R4DV",
  },
  {
    name: "Ilia",
    surName: "Topuria",
    email: "ilia.topuria@example.com",
    text: "Undefeated for a reason. I'm here to dominate the featherweight division and beyond. My grappling is world-class, but don't sleep on my striking. I've got the skills to beat anyone, anywhere. Watch out, I'm coming for that belt!",
    src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2024-02/TOPURIA_ILIA_BELT-298.png?h=a30e7339&itok=MD8Hzg-p",
  },
  {
    name: "Conor",
    surName: "McGregor",
    email: "conor.mcgregor@example.com",
    text: "The king is back! I've changed the game, and I'm not done yet. Two division champ? I've been there, done that. Now I'm coming back stronger than ever. Love me or hate me, you can't ignore me. The McGregor show is far from over!",
    src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-07/67667%252Fprofile-galery%252Fprofile-picture%252FMCGREGOR_CONOR_07-10.png?h=a30e7339&itok=9J5yEZpN",
  },
  {
    name: "Khabib",
    surName: "Nurmagomedov",
    email: "khabib.nurmagomedov@example.com",
    text: "Alhamdulillah, I achieved my goals in this sport. 29-0, undefeated and undisputed. Now, I focus on coaching the next generation. The lightweight division is exciting, but for me, it's time to pass the torch. My legacy speaks for itself.",
    src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/image/fighter_images/Khabib_Nurmagomedov/1NURMAGOMEDOV_KHABIB.png?itok=QMt9NZgy",
  },
  {
    name: "Jon",
    surName: "Jones",
    email: "jon.jones@example.com",
    text: "They say I'm the GOAT, but I'm still hungry for more. Moving up to heavyweight was just the next challenge. I've beaten the best of the best, and I'm not slowing down. My creativity in the cage is unmatched. Bring on any challenger, any weight class.",
    src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2023-03/JONES_JON_BELT_03_04.png?h=a30e7339&itok=CJxGS6jY",
  },
  {
    name: "Amanda",
    surName: "Nunes",
    email: "amanda.nunes@example.com",
    text: "Two divisions, one champion. I've cleared out bantamweight and featherweight. They call me the GOAT of women's MMA, but I'm not done yet. Every fight is a chance to prove why I'm the best. Who's next?",
    src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2023-06/NUNES_AMANDA_BELTX2_06-10.png?h=a30e7339&itok=7kdkyQTs",
  },
  {
    name: "Israel",
    surName: "Adesanya",
    email: "israel.adesanya@example.com",
    text: "Style bender in the house! I'm not just a fighter, I'm an artist. The octagon is my canvas, and I paint masterpieces with my movements. I've faced setbacks, but watch me bounce back stronger. The middleweight division is mine, and I'm here to stay.",
    src: "https://ufc.com/images/styles/teaser/s3/2024-08/ADESANYA_ISRAEL_08-17.png?h=a30e7339&itok=I1n7gvwB",
  },
  {
    name: "Valentina",
    surName: "Shevchenko",
    email: "valentina.shevchenko@example.com",
    text: "Precision is the key to victory. I respect all my opponents, but inside the cage, I'm there to dominate. My striking is my art, my grappling is my strength. The flyweight division has never seen anyone like me, and I plan to keep it that way.",
    src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2024-09/SHEVCHENKO_VALENTINA_BELT_03-05.png?h=a30e7339&itok=deWvKtr9",
  },
  {
    name: "Max",
    surName: "Holloway",
    email: "max.holloway@example.com",
    text: "It is what it is! I'm the best boxer in the UFC, baby! Featherweight or lightweight, I'll take on anyone. My cardio is unmatched, and I'm always looking to put on a show for the fans. Blessed Express coming through!",
    src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2024-04/HOLLOWAY_MAX_04-13.png?h=a30e7339&itok=Y-GNn5nl",
  },
  {
    name: "Stipe",
    surName: "Miocic",
    email: "stipe.miocic@example.com",
    text: "I let my fighting do the talking. Being a firefighter and a heavyweight champ isn't easy, but I wouldn't have it any other way. I've faced the biggest and baddest in the division, and I'm still standing. Ready for whatever comes next.",
    src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2023-07/MIOCIC_STIPE_07_07.png?h=a30e7339&itok=ajLmjA6L",
  },
  {
    name: "Rose",
    surName: "Namajunas",
    email: "rose.namajunas@example.com",
    text: "Thug Rose is always ready for war. I might look sweet, but in that cage, I'm as tough as they come. Two-time champ, and I'm not done yet. My mind is my greatest weapon, and I'm always evolving. The best is yet to come!",
    src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2024-07/NAMAJUNAS_ROSE_07-13.png?h=a30e7339&itok=S4Zrddtj",
  },
  {
    name: "Francis",
    surName: "Ngannou",
    email: "francis.ngannou@example.com",
    text: "From the sand mines of Cameroon to the bright lights of the UFC. My journey is far from over. They call me the hardest hitter in the world, but I'm more than just power. I'm here to inspire and show that anything is possible with hard work and determination.",
    src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/teaser/s3/2021-03/67964%252Fprofile-galery%252Fprofile-picture%252FNGANNOU_FRANCIS_03-27.png?h=a30e7339&itok=P1EweLm-",
  },
];

export default fighters;
