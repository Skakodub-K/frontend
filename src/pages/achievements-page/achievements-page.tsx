import Section from "@/shared/components/Section";
import type { IACHProps } from "@/shared/components/types";

const AchievementsPage = () => {
  const achievements: IACHProps[] = [
    {
      title: "Клиентский сервис",
      description: "Лучшие ачивки за клиентский сервис!!!",
      items: [
        { id: 1, url: "ach1.png", title: "Легенда роста" },
        { id: 2, url: "ach2.png", title: "Вебинарный дебют" },
        { id: 3, url: "ach3.png", title: "Первый кейс" },
      ],
    },
    {
      title: "Командное взаимодействие",
      description: "Лучшие ачивки за командное взаимодействие!!!",
      items: [
        { id: 1, url: "ach4.png", title: "Первые шаги" },
        { id: 2, url: "ach5.png", title: "Эксперт кейсов" },
        { id: 3, url: "ach6.png", title: "Мастер обучения" },
      ],
    },
  ];
  return achievements.map((item, index) => {
    return (
      <Section
        key={index}
        title={item.title}
        description={item.description}
        achievements={item.items}
      ></Section>
    );
  });
};
export default AchievementsPage;
