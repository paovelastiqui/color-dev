import Clip from "/copy.png"

const SingleColor = ({ hexColor }) => {

    const handleCopy = (color) => () => {
        const colorNew = `#${color}`;
        navigator.clipboard.writeText(colorNew);
    }

    return (
        <div className="single-card" style={ {backgroundColor: `#${hexColor}`}}>
            <div className="content">
                <p>#{ hexColor }</p>
                <button onClick={handleCopy(hexColor)}>
                    <img src={Clip} alt="copy" />
                </button>
            </div>
        </div>
    );
}

export default SingleColor;