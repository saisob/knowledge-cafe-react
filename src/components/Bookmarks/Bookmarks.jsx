import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="w-1/3">
            <h1 className="text-6xl">Bookmarks:{bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
           
        </div>
    );
};
 
export default Bookmarks;