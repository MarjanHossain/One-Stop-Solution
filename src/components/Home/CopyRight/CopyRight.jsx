const newYear = new Date().getFullYear();
const CopyRight = () => {
    return (
        <div className="text-center text-gray-800">
            <p><small>All reserved @MH {newYear}</small></p>
        </div>
    );
};

export default CopyRight;