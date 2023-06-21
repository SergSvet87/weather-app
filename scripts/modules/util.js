const addZero = (n) => (n < 10 ? `0${n}` : n);

export const getCurrentDateTime = () => {
  const months = [
    "січ",
    "лют",
    "бер",
    "кві",
    "тра",
    "чер",
    "лип",
    "сер",
    "вер",
    "жов",
    "лис",
    "гру",
  ];

  const weekDays = [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четверг",
    "п'ятниця",
    "субота",
  ];

  const date = new Date();

  const dayOfMonth = date.getDate();
  const dayOfWeek = weekDays[date.getDay()];
  console.log("dayOfWeek: ", dayOfWeek);
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());

  return { month, year, dayOfMonth, dayOfWeek, hours, minutes };
};
