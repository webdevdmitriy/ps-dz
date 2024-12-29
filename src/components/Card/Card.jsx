import style from './Card.module.css'

const Card = ({ rating, img, title }) => {
  return (
    <div className={style.card}>
      <div className={style.card__rating}>
        <svg className={style.card__star} width="16px" height="16px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.15333 2.34L10.3267 4.68667C10.4867 5.01334 10.9133 5.32667 11.2733 5.38667L13.4 5.74C14.76 5.96667 15.08 6.95334 14.1 7.92667L12.4467 9.58C12.1667 9.86 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.86 3.55333 9.58L1.9 7.92667C0.926667 6.95334 1.24 5.96667 2.6 5.74L4.72667 5.38667C5.08 5.32667 5.50667 5.01334 5.66667 4.68667L6.84 2.34C7.48 1.06667 8.52 1.06667 9.15333 2.34Z"
            stroke="#FFAD49"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>{rating}</span>
      </div>
      <img className={style.card__img} src={`/films/${img}`} alt="" />
      <p className={style.card__title}>{title}</p>
      <div className={style.favorite}>
        <svg className={style.card__like} width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.35003 19.58 9.35003H15.58C14.98 9.35003 14.48 8.85003 14.58 8.15003L15.08 4.95003C15.28 4.05003 14.68 3.05003 13.78 2.75003C12.98 2.45003 11.98 2.85003 11.58 3.45003L7.47998 9.55003"
            stroke="#7B6EF6"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
          <path
            d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z"
            stroke="#7B6EF6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>В избранное</span>
      </div>
    </div>
  )
}

export default Card
