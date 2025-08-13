import Colleagues from "@/shared/components/Colleagues";

const ProfilePage = () => {
  const users = [
    {
      id: 1,
      fullname: "Иванов Марк Андреевич",
      position: "QA",
      photo: "profile.png",
    },
    {
      id: 4,
      fullname: "Иванов Марк Андреевич",
      position: "fullstack",
      photo: "profile.png",
    },
    {
      id: 2,
      fullname: "Иванов Марк Андреевич",
      position: "frontend",
      photo: "profile.png",
    },
    {
      id: 3,
      fullname: "Иванов Марк Андреевич",
      position: "Team Lead",
      photo: "profile.png",
    },
  ];
  return (
    <main>
      <Colleagues users={users} />
    </main>
  );
};

export default ProfilePage;
