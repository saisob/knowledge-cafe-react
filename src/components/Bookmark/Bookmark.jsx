

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Bookmark;