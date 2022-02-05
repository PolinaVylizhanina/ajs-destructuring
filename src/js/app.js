export default function availableAttack(character) {
  const { special } = character;
  const result = [];
  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание не доступно',
    } = element;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
