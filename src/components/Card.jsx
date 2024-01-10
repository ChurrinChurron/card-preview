import profile from "../assets/image-avatar.webp";
import illust from "../assets/illustration-article.svg"
import "./styles/Card.css"

const Card = ({tag, date, title, desc, nameUser}) => {
  return (
    <div className="card bg-white w-100 p-4">
        <img src={illust} className="rounded" alt="illustration"/>
        <span className="badge bg-warning text-dark mt-4 mb-2 w-25 py-2">{tag}</span>
        <p>Published {date}</p>
        <a href="#" className="h4 fw-bold mb-3 text-decoration-none">{title}</a>
        <p className="text-secondary">{desc}</p>
        <div className="d-flex align-items-center">
            <img src={profile} className="userProfile" alt="user profile"/>
            <p className="m-0 ms-2 fw-bold">{nameUser}</p>
        </div>
    </div>
  )
}

export default Card