import "./Statistics.css"

const Statistics = () => {
    return (
        <div className="statistics-container">
            <h1>О нас в цифрах</h1>
            <div className="stats">
                <div className="stats-container">
                    <p className="stats-number">89</p>
                    <p className="stats-text">Стран присутствия</p>
                </div>
                <div className="stats-container">
                    <p className="stats-number">100+</p>
                    <p className="stats-text">Успешных проектов</p>
                </div>
                <div className="stats-container">
                    <p className="stats-number">15+</p>
                    <p className="stats-text">Экспертов</p>
                </div>
                <div className="stats-container">
                    <p className="stats-number">24/7</p>
                    <p className="stats-text">Поддержка</p>
                </div>
                <div className="stats-container">
                    <p className="stats-number">с 2022</p>
                    <p className="stats-text">Года на рынке</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics;