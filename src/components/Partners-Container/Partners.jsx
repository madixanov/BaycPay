import "./Partners.css"
import partners from "../../assets/images/partners.svg"

const Partners = () => {
    return (
        <div className="partners-container">
            <h1>Предоставляем работу<br />
            через <span>платежные системы:</span></h1>
            <div className="partners">
                <div className="container">
                    <p>Южная Америка:</p>
                    <img src={partners} alt="partners" />
                </div>
                <div className="container">
                    <p>Азия:</p>
                    <img src={partners} alt="partners" />
                </div>
                <div className="container">
                    <p>Европа:</p>
                    <img src={partners} alt="partners" />
                </div>
                <div className="container">
                    <p>Страны СНГ:</p>
                    <img src={partners} alt="partners" />
                </div>
                <div className="container">
                    <p>Россия:</p>
                    <img src={partners} alt="partners" />
                </div>
                <div className="container">
                    <p>Африка:</p>
                    <img src={partners} alt="partners" />
                </div>
            </div>
        </div>
    )
}

export  default Partners;