import style from "./selectChar.module.css";

export default ({ charInfo }: { charInfo: any }) => {
  return (
    <section className={style.info}>
      {charInfo ? (
        <>
          {" "}
          <h3 className={style.infoTitle}>Informações</h3>
          <p className={style.infoItem}>
            <span>nome</span>: {charInfo?.name}
          </p>
          <p className={style.infoItem}>
            <span>level</span>: {charInfo?.level}
          </p>
          <p className={style.infoItem}>
            <span>Experiencia atual</span>: {charInfo?.Attributes?.exp}
          </p>
          <p className={style.infoItem}>
            <span>Vida Maximo</span>: {charInfo?.Attributes?.life_max}
          </p>
          <p className={style.infoItem}>
            <span>Vida Atual</span>: {charInfo?.Attributes?.life_current}
          </p>
          <p className={style.infoItem}>
            <span>Ataque Minimo</span>: {charInfo?.Attributes?.attack_min}
          </p>
          <p className={style.infoItem}>
            <span>Ataque Maximo</span>: {charInfo?.Attributes?.attack_max}
          </p>
          <p className={style.infoItem}>
            <span>Chance de Defesa</span>: {charInfo?.Attributes?.defense_rate}
          </p>
        </>
      ) : (
        <h3 className={style.infoTitle}>
          Informações - Crie um Peronsagem Novo
        </h3>
      )}
    </section>
  );
};
